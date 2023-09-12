export default class LoginPage {

 constructor(page) {
   this.page = page

   this.inputEmail = page.locator('#normal_login_email') //not async
   this.inputPassword = page.locator('#normal_login_password')
   this.buttonSubmit = page.locator('button[type="submit"]')
   this.toast = page.locator('.ant-notification-notice-message')
 }
 //actions
  async open(){
   return this.page.goto('/user/login') //add await if want so in test...
  }
  async logIn(email, password){
    await this.inputEmail.fill(email)
    await this.inputPassword.fill(password)
    await this.buttonSubmit.click()
  }
}

