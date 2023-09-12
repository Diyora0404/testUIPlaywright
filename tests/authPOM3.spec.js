import {test, expect} from "@playwright/test";
import LoginPage from "../pages/login";

test.describe('Authentication & Authorization', () => {
  // let loginPage
  //
  // test.beforeEach(async ({page}) => {
  //   //await page.goto('/user/login')
  //   loginPage = new LoginPage(page)
  //   await loginPage.open()

    //fixtures заменяет это наптсание функций или вызов page  test.js
    test.beforeEach(async({loginPage}) => {
      await loginPage.oprn()
    })


  test('Sign in with existing credentials', async ({page, loginPage}) => {
    await LoginPage.inputEmail.fill(process.env.EMAIL)
    await LoginPage.inputPassword.fill(process.env.PASSWORD)
    await LoginPage.buttonSubmit.click()
    await expect(page.locator('ant-avatar-square'))
  })
  test('Sing in with invalid credentials', async ({loginPage}) => {
    await LoginPage.inputEmail.fill('diyoraabd@gmail.com')
    await LoginPage.inputPassword.fill('invalid')
    await LoginPage.buttonSubmit.click()

    await expect(LoginPage.toast).toBeVisible()
    await expect(LoginPage.toast).toHaveText('User login. Fail')
  })
})
