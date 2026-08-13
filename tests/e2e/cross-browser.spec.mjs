import { test, expect } from "@playwright/test";

const criticalRoutes = ["/", "/projets/", "/contact/"];

function pathPattern(path) {
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\/$/, "");
  return new RegExp(`${escaped}/?(?:[?#].*)?$`);
}

test("critical pages render without browser errors or horizontal overflow", async ({ page }) => {
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  for (const route of criticalRoutes) {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response, `No response for ${route}`).not.toBeNull();
    expect(response.status(), `HTTP error on ${route}`).toBeLessThan(400);
    await expect(page.locator("h1").first()).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `Horizontal overflow on ${route}`).toBeLessThanOrEqual(1);
  }

  expect(pageErrors).toEqual([]);
});

test("project signature image loads and its case study opens", async ({ page }) => {
  await page.goto("/projets/", { waitUntil: "networkidle" });

  const image = page.locator(".project-card-featured img").first();
  await expect(image).toBeVisible();
  await expect.poll(
    () => image.evaluate((element) => element.complete && element.naturalWidth > 0),
    { message: "Featured project image failed to load", timeout: 10_000 },
  ).toBe(true);

  await page.getByRole("link", { name: "Voir l’étude de cas Parayon" }).click();
  await expect(page).toHaveURL(pathPattern("/projets/parayon/"));
  await expect(page.locator("h1").first()).toBeVisible();
});

test("primary navigation and contact form stay functional", async ({ page }) => {
  await page.goto("/");
  await page.locator("header").getByRole("link", { name: "Me contacter" }).click();
  await expect(page).toHaveURL(pathPattern("/contact/"));

  const form = page.locator("form");
  await page.locator('input[name="name"]').fill("Cross Browser QA");
  await page.locator('input[name="email"]').fill("qa@example.com");
  await page.locator('select[name="requestType"]').selectOption({ label: "Audit / reprise de projet" });
  await page.locator('textarea[name="message"]').fill("Validation du parcours critique sur plusieurs moteurs navigateur.");
  expect(await form.evaluate((element) => element.checkValidity())).toBe(true);

  await expect(page.locator('a[href="mailto:e.leligny@gmail.com"]').first()).toBeVisible();
});
