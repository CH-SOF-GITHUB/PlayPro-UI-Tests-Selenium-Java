import { test, expect } from '@playwright/test';

test('Search for Custom T-Shirt', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.fill('input[name="q"]', 'T-shirt');
    await page.press('input[name="q"]', 'Enter');
    await page.click('text=Custom T-Shirt');
    const title = await page.locator('h1').innerText();
    expect(title).toBe('Custom T-Shirt');
});

