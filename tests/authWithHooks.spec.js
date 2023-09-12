const {test, expect} = require('@playwright/test')
test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/user/login')
  })
  test('Sign in with existing credentials', async ({page}) => {
    await page.locator('#normal_login_email').type(process.env.EMAIL)
    await page.locator('#normal_login_password').fill(process.env.PASSWORD)
    await page.locator('button[type="submit"]').click()
    expect(page.locator('ant-avatar-square'))
  })
  test('Sing in with invalid credentials', async ({page}) => {
    await page.locator('#normal_login_email').type('diyoraabd@gmail.com')
    await page.locator('#normal_login_password').fill('invalid')
    await page.locator('button[type="submit"]').click()
    //expect(page.locator('.ant-notification-notice-error'))
    const toast = page.locator('.ant-notification-notice-message')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText('User login. Fail')
  })
})
