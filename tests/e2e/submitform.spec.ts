import { test, expect } from '@playwright/test';

const fillPersonalInfo = async ({ page }) => {
  await page.goto('https://react-form-mock.vercel.app/');
  await page.getByText('Name', { exact: true }).click();
  await page.getByPlaceholder('e.g. Tony Stark').fill('Pushpendra Singh');
  await page.getByRole('button', { name: 'Next Step' }).click();
  expect(page.getByText('Email is required.')).toBeInViewport();
  expect(page.getByText('Phone is required.')).toBeInViewport();
  await page.getByText('Email', { exact: true }).click();
  await page.getByPlaceholder('e.g. ironbhai@stark.com').fill('test@gmail.com');
  await page.getByPlaceholder('e.g. ironbhai@stark.com').press('Tab');
  await page.getByPlaceholder('e.g. +91 8888888888').fill('+91 4545454545');
  expect(page.getByText('Enter')).not.toBeInViewport();
  await page.getByRole('button', { name: 'Next Step' }).click();
};

test('Load page and fill personal info', fillPersonalInfo);

test('Select plan and add ons and submit form', async ({ page, request }) => {
  await fillPersonalInfo({ page });
  await page.getByRole('button', { name: 'pro' }).click();
  await page.getByText('MonthlyYearly').click();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await page.getByTestId('online-label').click();
  await page.getByTestId('storage-checkbox').check();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await page.getByRole('button', { name: 'Change' }).click();
  await page.getByRole('button', { name: 'arcade' }).click();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  const response = await request.post('/v2/5d9d9219310000153650e30b');
  expect(response.ok()).toBeTruthy();
  let responseBody = await response.json();
  expect(responseBody.result).toBe('success');
  await expect(
    page.getByRole('heading', { name: 'Thank You' })
  ).toBeInViewport();
  await expect(page.getByText('Pushpendra Singh')).toBeInViewport();
});
