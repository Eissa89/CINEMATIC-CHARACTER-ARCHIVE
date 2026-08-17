import { test, expect } from '@playwright/test';

test('Verify Hero component and interactive bilingual character name switch', async ({ page }) => {
  // 1. Listen for console errors
  const consoleErrors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const failedRequests: string[] = [];
  page.on('requestfailed', (req) => {
    failedRequests.push(`${req.url()} - ${req.failure()?.errorText}`);
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      failedRequests.push(`${res.url()} returned HTTP ${res.status()}`);
    }
  });

  const baseUrl = process.env.TARGET_URL || 'http://localhost:4173/';
  await page.goto(baseUrl);
  await page.waitForLoadState('networkidle');

  // Verify English name displayed initially
  const enName = page.locator('text="LIGHTNING McQUEEN"').first();
  await expect(enName).toBeVisible();

  // Verify Hero Image is rendered and loaded
  const heroImg = page.locator('img[alt="LIGHTNING McQUEEN"]');
  await expect(heroImg).toBeVisible();
  const naturalWidth = await heroImg.evaluate((img: HTMLImageElement) => img.naturalWidth);
  expect(naturalWidth).toBeGreaterThan(0);

  // Take screenshot in English state
  await page.screenshot({ path: 'screenshot_en.png', fullPage: true });

  // Click on the character name button to trigger smooth transition
  await page.click('button[aria-label*="Toggle character name"]');
  await page.waitForTimeout(400); // allow transition animation

  // Verify Arabic name displayed
  const arName = page.locator('text="برق بنزين"').first();
  await expect(arName).toBeVisible();

  // Take screenshot in Arabic state
  await page.screenshot({ path: 'screenshot_ar.png', fullPage: true });

  // Verify tagline is visible
  const tagline = page.locator('text="«تركيز. سرعة. أنا صاروخ.»"').first();
  await expect(tagline).toBeVisible();

  // Verify no console errors or failed requests occurred
  expect(consoleErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
});
