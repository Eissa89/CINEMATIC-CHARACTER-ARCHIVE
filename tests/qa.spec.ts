import { test, expect } from '@playwright/test';

test('Verify Hero component and interactive bilingual character name switch', async ({ page }) => {
  // 1. Listen for console errors
  const consoleErrors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('http://localhost:3000/');
  await page.waitForLoadState('networkidle');

  // Verify English name displayed initially
  const enName = page.locator('text="LIGHTNING McQUEEN"');
  await expect(enName).toBeVisible();

  // Take screenshot in English state
  await page.screenshot({ path: 'screenshot_en.png', fullPage: true });

  // Click on the character name button to trigger smooth transition
  await page.click('button[aria-label*="Toggle character name"]');
  await page.waitForTimeout(400); // allow transition animation

  // Verify Arabic name displayed
  const arName = page.locator('text="برق بنزين"');
  await expect(arName).toBeVisible();

  // Take screenshot in Arabic state
  await page.screenshot({ path: 'screenshot_ar.png', fullPage: true });

  // Verify tagline is visible
  const tagline = page.locator('text="«تركيز. سرعة. أنا صاروخ.»"');
  await expect(tagline).toBeVisible();

  // Verify no console errors occurred
  expect(consoleErrors).toEqual([]);
});
