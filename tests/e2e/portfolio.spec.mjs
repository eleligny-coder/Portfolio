import { test, expect } from "@playwright/test";

const coreRoutes = [
  "/",
  "/projets/",
  "/services/",
  "/competences/",
  "/a-propos/",
  "/cv/",
  "/contact/",
  "/formations/",
  "/methode/",
  "/projets/parayon/",
  "/projets/ratiopro/",
  "/projets/france-reliance/",
  "/projets/le-billot-pro/",
  "/projets/livre-d-un-clic-wordpress/",
];

const projectCases = [
  ["Parayon", "/projets/parayon/"],
  ["RatioPro", "/projets/ratiopro/"],
  ["France Reliance™", "/projets/france-reliance/"],
  ["Le Billot Pro", "/projets/le-billot-pro/"],
  ["Livré d’un Clic — WordPress", "/projets/livre-d-un-clic-wordpress/"],
];

function pathPattern(path) {
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\/$/, "");
  return new RegExp(`${escaped}/?(?:[?#].*)?$`);
}

async function expectRoute(page, path) {
  await expect(page).toHaveURL(pathPattern(path));
}

test("all generated routes render without browser errors and all images load", async ({ page }) => {
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  for (const route of coreRoutes) {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response, `No response for ${route}`).not.toBeNull();
    expect(response.status(), `HTTP error on ${route}`).toBeLessThan(400);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();

    const brokenImages = await page.locator("img").evaluateAll((images) => images
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.getAttribute("src")));
    expect(brokenImages, `Broken images on ${route}`).toEqual([]);
  }

  expect(pageErrors).toEqual([]);
});

test("every same-origin link exposed by the site resolves", async ({ page, request }) => {
  const hrefs = new Set();

  for (const route of coreRoutes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const links = await page.locator("a[href]").evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href")));
    for (const href of links) {
      if (href?.startsWith("/")) hrefs.add(href.split("#")[0].split("?")[0]);
    }
  }

  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), `Broken internal link: ${href}`).toBeLessThan(400);
  }
});

test("desktop header navigation and primary home CTAs work", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Desktop navigation only");

  const navItems = [
    ["Accueil", "/"],
    ["Projets", "/projets/"],
    ["Services", "/services/"],
    ["Compétences", "/competences/"],
    ["À propos", "/a-propos/"],
    ["CV", "/cv/"],
  ];

  for (const [label, path] of navItems) {
    await page.goto("/");
    const header = page.locator("header");
    await header.getByRole("link", { name: label, exact: true }).click();
    await expectRoute(page, path);
  }

  await page.goto("/");
  await page.getByRole("link", { name: "Voir mes réalisations" }).click();
  await expectRoute(page, "/projets/");

  await page.goto("/");
  await page.locator("header").getByRole("link", { name: "Me contacter" }).click();
  await expectRoute(page, "/contact/");
});

test("mobile menu opens, closes with Escape, restores focus and navigates", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium", "Mobile navigation only");

  await page.goto("/");
  const openButton = page.getByRole("button", { name: "Ouvrir le menu" });
  await expect(openButton).toBeVisible();
  await openButton.click();
  await expect(page.locator("#main-navigation")).toBeVisible();

  await page.keyboard.press("Escape");
  const reopenedButton = page.getByRole("button", { name: "Ouvrir le menu" });
  await expect(page.locator("#main-navigation")).toBeHidden();
  await expect(reopenedButton).toBeFocused();

  await reopenedButton.click();
  await page.locator("#main-navigation").getByRole("link", { name: "Projets", exact: true }).click();
  await expectRoute(page, "/projets/");
});

test("CV download and print controls work", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Desktop document controls only");

  await page.goto("/");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: /Télécharger mon CV/ }).first().click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/\.pdf$/i);

  await page.goto("/cv/");
  await page.evaluate(() => {
    window.print = () => document.body.setAttribute("data-print-invoked", "true");
  });
  await page.getByRole("button", { name: "Imprimer / enregistrer en PDF" }).click();
  await expect(page.locator("body")).toHaveAttribute("data-print-invoked", "true");
});

test("every project card opens the expected case study", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Project link crawl once on desktop");

  for (const [name, path] of projectCases) {
    await page.goto("/projets/");
    await page.getByRole("link", { name: `Voir l’étude de cas ${name}` }).click();
    await expectRoute(page, path);
  }
});

test("project gallery opens, navigates by keyboard, closes and restores focus", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Gallery interaction once on desktop");

  await page.goto("/projets/france-reliance/");
  const trigger = page.getByRole("button", { name: "Agrandir Centre entrepreneur" });
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: /Galerie France Reliance/ });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Fermer" })).toBeFocused();

  await page.keyboard.press("ArrowRight");
  await expect(dialog.getByText(/Pôle solidarité/).first()).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.getByText(/Centre entrepreneur/).first()).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("contact form validates fields and copy-email control works", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Contact interaction once on desktop");

  await page.goto("/contact/");
  const submit = page.getByRole("button", { name: /Préparer l’email/ });
  await submit.click();
  expect(await page.locator('input[name="name"]').evaluate((input) => input.matches(":invalid"))).toBe(true);

  await page.locator('input[name="name"]').fill("Test QA");
  await page.locator('input[name="email"]').fill("qa@example.com");
  await page.locator('select[name="requestType"]').selectOption({ label: "Audit / reprise de projet" });
  await page.locator('textarea[name="message"]').fill("Je vérifie le fonctionnement complet du formulaire de contact du portfolio.");
  expect(await page.locator("form").evaluate((form) => form.checkValidity())).toBe(true);

  const copyButton = page.getByRole("button", { name: "Copier l’adresse email" });
  await copyButton.click();
  await expect(page.getByRole("button", { name: /Adresse copiée/ })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("e.leligny@gmail.com");
});

test("external proof links and mailto destination are correct", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('a[href="https://github.com/eleligny-coder"]').first()).toHaveAttribute("target", "_blank");
  await expect(page.locator('a[href="https://www.malt.fr/profile/elieleligny1"]').first()).toHaveAttribute("target", "_blank");

  await page.goto("/contact/");
  await expect(page.locator('a[href="mailto:e.leligny@gmail.com"]').first()).toBeVisible();
});

test("all visible buttons have an accessible name", async ({ page }) => {
  for (const route of coreRoutes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const unnamed = await page.locator("button:visible").evaluateAll((buttons) => buttons
      .filter((button) => !(button.getAttribute("aria-label") || button.textContent?.trim()))
      .map((button) => button.outerHTML));
    expect(unnamed, `Unnamed buttons on ${route}`).toEqual([]);
  }
});
