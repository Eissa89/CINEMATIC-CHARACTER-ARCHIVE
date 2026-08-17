import { chromium } from 'playwright';

async function verifyAll() {
  const baseUrl = process.env.TARGET_URL || 'http://localhost:4173/';
  console.log(`Starting verification against ${baseUrl}...`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const failedRequests = [];
  page.on('requestfailed', (req) => {
    failedRequests.push(`${req.url()} - ${req.failure()?.errorText}`);
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      failedRequests.push(`${res.url()} returned HTTP ${res.status()}`);
    }
  });

  const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
  console.log('Status code:', response.status());

  if (response.status() !== 200) {
    throw new Error(`Expected HTTP 200, got ${response.status()}`);
  }

  // 1. Verify Hero Title & Character Name
  const enName = page.locator('text="LIGHTNING McQUEEN"').first();
  if (!(await enName.isVisible())) {
    throw new Error('English character name not visible!');
  }
  console.log('✓ English character name is visible');

  // 2. Verify Hero Image renders and has non-zero naturalWidth
  const heroImg = page.locator('img[alt="LIGHTNING McQUEEN"]');
  if (!(await heroImg.isVisible())) {
    throw new Error('Hero image element is not visible!');
  }

  const naturalWidth = await heroImg.evaluate((img) => img.naturalWidth);
  const currentSrc = await heroImg.evaluate((img) => img.currentSrc);
  console.log(`Hero image currentSrc: ${currentSrc}, naturalWidth: ${naturalWidth}`);

  if (naturalWidth <= 0) {
    throw new Error(`Hero image failed to load! naturalWidth is ${naturalWidth}`);
  }
  console.log('✓ Hero image loaded successfully and rendered');

  // 3. Test interactive bilingual switch
  const toggleBtn = page.locator('button[aria-label*="Toggle character name"]');
  await toggleBtn.click();
  await page.waitForTimeout(500);

  const arName = page.locator('text="برق بنزين"').first();
  if (!(await arName.isVisible())) {
    throw new Error('Arabic character name not visible after toggle!');
  }
  console.log('✓ Arabic character name is visible after toggle');

  // 4. Test mobile layout
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(500);
  console.log('✓ Mobile layout updated without errors');

  // 5. Check console errors and network failures
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error(`Found ${consoleErrors.length} console error(s)`);
  } else {
    console.log('✓ Zero console errors');
  }

  if (failedRequests.length > 0) {
    console.error('Failed requests:', failedRequests);
    throw new Error(`Found ${failedRequests.length} failed HTTP request(s)`);
  } else {
    console.log('✓ Zero failed network requests');
  }

  // Take final screenshots
  await page.screenshot({ path: 'screenshot_ar.png', fullPage: true });

  await toggleBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_en.png', fullPage: true });

  await browser.close();
  console.log('🎉 ALL VERIFICATIONS PASSED SUCCESSFULLY!');
}

verifyAll().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
