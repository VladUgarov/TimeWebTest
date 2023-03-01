import { test, expect } from '@playwright/test';

test.describe("Screenshot Task", () => {

    test('Page screenshot Хостинг для 1С-Битрикс', async ({page}) => {
        await page.goto('https://timeweb.com/ru/services/bitrix/');
        await expect(page).toHaveScreenshot();
    });
});