import { test, expect } from "@playwright/test";

const criticalRoutes = [
  "/",
  "/projets/",
  "/projets/france-reliance/",
  "/contact/",
  "/cv/",
  "/entreprise/",
  "/confidentialite/",
];

async function expectNoHorizontalOverflow(page, route) {
  const metrics = await page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
  }));

  expect(
    metrics.documentWidth,
    `Document overflows horizontally on ${route}: ${JSON.stringify(metrics)}`,
  ).toBeLessThanOrEqual(metrics.viewportWidth + 1);
  expect(
    metrics.bodyWidth,
    `Body overflows horizontally on ${route}: ${JSON.stringify(metrics)}`,
  ).toBeLessThanOrEqual(metrics.viewportWidth + 1);
}

async function expectShellsInsideViewport(page, route) {
  const failures = await page.locator(".shell").evaluateAll((elements) => elements
    .map((element) => {
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left,
        right: rect.right,
        width: rect.width,
        viewport: window.innerWidth,
        text: element.textContent?.trim().slice(0, 80) ?? "",
      };
    })
    .filter(({ left, right, viewport }) => left < -1 || right > viewport + 1));

  expect(failures, `Shell outside viewport on ${route}`).toEqual([]);
}

test("critical pages fit the viewport without horizontal clipping", async ({ page }) => {
  for (const route of criticalRoutes) {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response, `No response for ${route}`).not.toBeNull();
    expect(response.status(), `HTTP error on ${route}`).toBeLessThan(400);
    await expect(page.locator("h1").first()).toBeVisible();
    await expectNoHorizontalOverflow(page, route);
    await expectShellsInsideViewport(page, route);
  }
});

test("mobile and tablet menu remains fully usable inside the viewport", async ({ page }) => {
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Ouvrir le menu" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const navigation = page.locator("#main-navigation");
  await expect(navigation).toBeVisible();
  const box = await navigation.boundingBox();
  expect(box).not.toBeNull();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual((await page.evaluate(() => window.innerWidth)) + 1);

  await expect(navigation.getByRole("link", { name: "Projets", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Me contacter", exact: true })).toBeVisible();
});

test("contact and project proof content remains readable at narrow widths", async ({ page }) => {
  await page.goto("/contact/");
  const contactCard = page.locator(".contact-direct-card");
  await expect(contactCard.getByRole("link", { name: "e.leligny@gmail.com", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /Préparer l’email/ })).toBeVisible();
  await expectNoHorizontalOverflow(page, "/contact/");

  await page.goto("/projets/france-reliance/");
  await expect(page.getByRole("heading", { name: "France Reliance™", level: 1 })).toBeVisible();
  await expect(page.getByRole("button", { name: "Agrandir Centre entrepreneur" })).toBeVisible();
  await expectNoHorizontalOverflow(page, "/projets/france-reliance/");
});
