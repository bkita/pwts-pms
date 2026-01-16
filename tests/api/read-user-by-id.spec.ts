import test, { expect } from 'playwright/test';

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

test('#API Read user by id', async ({ request }) => {
  const response = await request.get(API_URL);

  console.log('Status code:', response.status());
  const responseBody = await response.json();
  console.log('Response body:', responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty('id', 1);
  expect(responseBody).toHaveProperty('username', 'Bret');
});
