import { chromium } from 'playwright';

async function runQa() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/CINEMATIC-CHARACTER-ARCHIVE/');
  await page.waitForTimeout(1000);

  // Take initial screenshot in /home/jules/verification/
  await page.screenshot({ path: '/home/jules/verification/verification_en.png', fullPage: true });

  // Toggle to Arabic
  await page.click('button[aria-label*="Toggle character name"]');
  await page.waitForTimeout(500);

  // Take Arabic screenshot
  await page.screenshot({ path: '/home/jules/verification/verification_ar.png', fullPage: true });

  await browser.close();
  console.log('Screenshots generated successfully.');
}

runQa().catch(console.error);
