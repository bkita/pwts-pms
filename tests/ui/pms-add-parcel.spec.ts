import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

// KROK 1 - NAGRANIE TESTU
test('#1 login as user and add parcel', async ({ page }) => {
  // Ardres URL przeniesiony do playwright.config.ts jako baseURL
  await page.goto('/pms');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('user');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('user123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Zalogowano jako użytkownik:' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Parcel Name' }).click();
  await page.getByRole('textbox', { name: 'Parcel Name' }).fill('paczka z zabawkami');
  await page.getByRole('textbox', { name: 'Parcel Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Recipient Name' }).fill('Sklep z zabawkami');
  await page.getByRole('textbox', { name: 'Recipient Name' }).press('Tab');
  await page.getByRole('spinbutton', { name: 'Weight (kg)' }).click();
  await page.getByRole('spinbutton', { name: 'Weight (kg)' }).fill('10');
  await page.getByRole('spinbutton', { name: 'Weight (kg)' }).press('Tab');
  await page.getByLabel('Priority').selectOption('Same Day');
  await page.getByText('Mark as Fragile').click();
  await page.getByRole('textbox', { name: 'Additional Notes' }).click();
  await page.getByRole('textbox', { name: 'Additional Notes' }).fill('Uwaga na zabawki!');
  await page.getByRole('button', { name: 'Add Parcel' }).click();
  await expect(page.getByRole('heading', { name: 'Parcel Added' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByRole('cell', { name: 'paczka z zabawkami' })).toBeVisible();
});

// KROK 2 - ZAMWIENIE PIZZY
test('#2 login as user and add parcel', async ({ page }) => {
  // Ardres URL przeniesiony do playwright.config.ts jako baseURL
  await page.goto('/pms');
  const pageTitle = await page.title();
  console.log(`Page title is: ${pageTitle}`);
});

// KROK 3 - ZNAJDŹ MNIE JEŻL POTRAFISZ :)
test('#3 login as user and add parcel', async ({ page }) => {
  // Ardres URL przeniesiony do playwright.config.ts jako baseURL
  await page.goto('/pms');
  await page.getByLabel('Username').fill('user');
  await page.getByLabel('Password').fill('user123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Zalogowano jako użytkownik: user')).toBeVisible();

  await page.getByLabel('Parcel Name').fill('paczka z zabawkami');
  await page.getByLabel('Recipient Name').fill('Sklep z zabawkami');
  await page.getByLabel('Weight (kg)').fill('10');
  await page.getByLabel('Priority').selectOption('Express');
  await page.getByLabel('Mark as Fragile').check();
  await page.getByLabel('Additional Notes').fill('zabawki dla dzieci');
  await page.getByRole('button', { name: 'Add Parcel' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  await expect(page.getByRole('cell', { name: 'paczka z zabawkami' })).toBeVisible();
});

// KROK 4 - DRY + POM
test('#4 login as user and add parcel', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('user', 'user123', 'Zalogowano jako użytkownik: user');

  await page.getByLabel('Parcel Name').fill('paczka z zabawkami');
  await page.getByLabel('Recipient Name').fill('Sklep z zabawkami');
  await page.getByLabel('Weight (kg)').fill('10');
  await page.getByLabel('Priority').selectOption('Express');
  await page.getByLabel('Mark as Fragile').check();
  await page.getByLabel('Additional Notes').fill('zabawki dla dzieci');
  await page.getByRole('button', { name: 'Add Parcel' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  await expect(page.getByRole('cell', { name: 'paczka z zabawkami' })).toBeVisible();
});

// KROK 5 - RAPORT
test('#5 login as admin and add parcel', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('admin', 'admin123', 'Zalogowano jako: Admin');

  await page.getByLabel('Parcel Name').fill('paczka z zabawkami');
  await page.getByLabel('Recipient Name').fill('Sklep z zabawkami');
  await page.getByLabel('Weight (kg)').fill('10');
  await page.getByLabel('Priority').selectOption('Express');
  await page.getByLabel('Mark as Fragile').check();
  // await page.getByLabel('Additional Notes').fill('zabawki dla dzieci');
  await page.getByRole('button', { name: 'Add Parcel' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  await expect(page.getByRole('cell', { name: 'paczka z zabawkami' })).toBeVisible();
});
