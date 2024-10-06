describe("E2E tests for search and item selection", () => {
  beforeEach(async () => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('input[type="text"]');
  });

  it("should write 'kumara' in searchBox, navigate to /items/, and click on the first item", async () => {
    await expect(page).toFill('input[type="text"]', 'kumara');

    await page.waitForSelector('button[type="button"]');
    await expect(page).toClick('button[type="button"]');

    await page.waitForSelector('.list-items', { timeout: 10000 });
    await expect(page.url()).toContain('/items?search=kumara');

    await expect(page).toClick('.list-items a.item:first-child');

    await page.waitForSelector('.product-detail__product', { timeout: 10000 });
    await expect(page.url()).toContain('/items/MLA1153861144');
  }, 60000);

  it("should have item price, title, button pay and image", async () => {
    await expect(page).toFill('input[type="text"]', 'kumara');

    await page.waitForSelector('button[type="button"]');
    await expect(page).toClick('button[type="button"]');

    await page.waitForSelector('.list-items', { timeout: 10000 });
    await expect(page.url()).toContain('/items?search=kumara');

    await expect(page).toClick('.list-items a.item:first-child');

    await page.waitForSelector('.detail-item__header-information-title', { timeout: 10000 });
    await expect(page).toMatchElement('.detail-item__header-information-title', {
      text: 'Teclado Gamer Redragon Kumara K552 Qwerty Outemu Red Español Latinoamérica Color Negro Con Luz Rgb',
    });

    await page.waitForSelector('.detail-item__header-information-price');
    await expect(page).toMatchElement('.detail-item__header-information-price', { text: '$ 54.999' });

    await page.waitForSelector('.detail-item__header-information-button');
    await expect(page).toMatchElement('.detail-item__header-information-button', { text: 'Comprar' });

    await page.waitForSelector('.detail-item__header-image');
    await expect(page).toMatchElement('.detail-item__header-image');
  }, 60000);
});
