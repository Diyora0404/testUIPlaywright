const {test, expect} = require('@playwright/test')

test.describe('Authentication & Authorization', () => {
  test('Sign in with existing credentials', async ({page}) => {
    await page.goto('https://coding.pasv.us/user/login')
    //await page.pause() //debug steps
    await page.locator('#normal_login_email').fill('diyoraabd04@gmail.com')
    await page.locator('#normal_login_password').fill('job0404di')
    await page.locator('button[type="submit"]').click()
    expect(page.locator('ant-avatar-square'))
  }) //test.only
  test('Sing in with invalid credentials', async ({page}) => {
    await page.goto('https://coding.pasv.us/user/login')
    await page.locator('#normal_login_email').type('diyoraabd@gmail.com')
    await page.locator('#normal_login_password').fill('job0404')
    await page.locator('button[type="submit"]').click()
    //expect(page.locator('.ant-notification-notice-error'))
    const toast = page.locator('.ant-notification-notice-message')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText('User login. Fail')
  })
})
