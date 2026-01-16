import { Page } from 'playwright';
import { expect } from 'playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open(): Promise<void> {
    // Ardres URL przeniesiony do playwright.config.ts jako baseURL
    await this.page.goto('/pms');
    await expect(this.page).toHaveTitle('Parcel Management System - Login');
  }

  async login(username: string, password: string, welcomeMessage: string): Promise<void> {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();

    await expect(this.page.getByText(welcomeMessage)).toBeVisible();
  }
}
