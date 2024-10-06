describe('Test home component', () => {

  
    beforeEach(async () => {
      await page.goto('http://localhost:5173');
    });
    
    it("should write 'kumara' in searchBox", async () => {
      await page.waitForSelector('input[type="text"]', { timeout: 5000 });
      
      await expect(page).toFill('input[type="text"]', 'kumara');

    });

    it("should write 'kumara' in searchBox and navigate /items/", async () => {
      await page.waitForSelector('input[type="text"]', { timeout: 5000 });
      
      await expect(page).toFill('input[type="text"]', 'kumara');
    
      await page.waitForSelector('button[type="button"]');
      await expect(page).toClick('button[type="button"]');
    
      await expect(page.url()).toMatch('/items?search=kumara');

      await page.waitForSelector('.search-results');
    
    }, 150000); 

    it("should write 'kumara' in searchBox, navigate to /items/, and click on the first item", async () => {
      await page.waitForSelector('input[type="text"]', { timeout: 5000 });
      
      await expect(page).toFill('input[type="text"]', 'kumara');
      
      await page.waitForSelector('button[type="button"]');
      await expect(page).toClick('button[type="button"]');
      
      await page.waitForNavigation(); 
      await expect(page.url()).toMatch('/items?search=kumara');
      
      await page.waitForSelector('.list-items');
    
      await expect(page).toClick('.list-items a.item:first-child');
      
      await page.waitForNavigation(); 
      await expect(page.url()).toMatch('/items/MLA1153861144');
    
    }, 150000);
    
    it("should have item price, title, button pay and image", async () => {
      await page.waitForSelector('input[type="text"]', { timeout: 5000 });
      await expect(page).toFill('input[type="text"]', 'kumara');
      
      await page.waitForSelector('button[type="button"]');
      await expect(page).toClick('button[type="button"]');
      
      await page.waitForNavigation(); 
      await expect(page.url()).toMatch('/items?search=kumara');
      
      await page.waitForSelector('.list-items');
      await expect(page).toClick('.list-items a.item:first-child');
      
      await page.waitForNavigation(); 
      await expect(page.url()).toMatch('/items/MLA1153861144');
    
      await page.waitForSelector('.detail-item__header-information-title');
      await expect(page).toMatchElement('.detail-item__header-information-title', {
        text: 'Teclado Gamer Redragon Kumara K552 Qwerty Outemu Red Español Latinoamérica Color Negro Con Luz Rgb',
      });
    
      await page.waitForSelector('.detail-item__header-information-price');
      await expect(page).toMatchElement('.detail-item__header-information-price', { text: '$ 54.999' });
    
      await page.waitForSelector('.detail-item__header-information-button');
      await expect(page).toMatchElement('.detail-item__header-information-button', { text: 'Comprar' });
    
      await page.waitForSelector('.detail-item__header-image');
      await expect(page).toMatchElement('.detail-item__header-image');
    }, 150000);
    
  });