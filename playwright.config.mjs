import { defineConfig, devices } from "@playwright/test";

const responsiveProject = (name, width, height = 900) => ({
  name,
  testMatch: /responsive\.spec\.mjs/,
  use: { ...devices["Desktop Chrome"], viewport: { width, height } },
});

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: { timeout: 6_000 },
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["github"], ["line"]] : "line",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    permissions: ["clipboard-read", "clipboard-write"],
  },
  webServer: {
    command: "python3 -m http.server 4173 -d out",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 20_000,
  },
  projects: [
    {
      name: "desktop-chromium",
      testIgnore: /responsive\.spec\.mjs/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      testIgnore: /responsive\.spec\.mjs/,
      use: { ...devices["Pixel 7"] },
    },
    responsiveProject("responsive-320", 320, 760),
    responsiveProject("responsive-375", 375, 812),
    responsiveProject("responsive-390", 390, 844),
    responsiveProject("responsive-430", 430, 932),
    responsiveProject("responsive-tablet", 768, 1024),
  ],
});
