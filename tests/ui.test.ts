import { test, expect } from '@playwright/test';

test.describe('UI task', () => {
  const phoneNumber:string = "8 (800) 700-10-81"
  const searchQuery:string = "vds"

  test.beforeEach(async ({page}) => {
    await page.goto("https://timeweb.com/ru/");
  });

  test('Checking that the page has our phone number', async ({page}) => {
    const textContent:string = await page.evaluate(() => document.body.textContent);
    expect(textContent).toContain(phoneNumber);
  });

  test('Checking the number in the header', async ({page}) => {
    const textContent:string = await page.locator('[itemprop="telephone"]').first().innerText();
    expect(textContent).toBe(phoneNumber);
  });

  test('search validation', async ({page}) => {
    await page.locator('.search-toggle').click();
    await page.locator('[placeholder="Введите поисковый запрос"]').fill(searchQuery);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    const currentUrl:string = await page.url();
    expect(currentUrl).toBe(`https://timeweb.com/ru/search?q=${searchQuery}`);
  });
});
