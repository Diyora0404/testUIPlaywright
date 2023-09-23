import Page from './page'
export default class LoginPage extends Page {
  constructor(page) {
    super(page) //вызов конструктора класса  родителя класса page

    this.input = {
      email: page.locator('#normal_login_email'),
      password: page.locator('#normal_login_password'),
    }
    this.button = {
      submit: page.locator('button[type="submit"]'),
    }
  }
  //actions:
  async open() {
    //add await if want so in test...
    return this.page.goto('/user/login')
  }

  async logIn(email, password) {
    await this.input.email.fill(email)
    await this.input.password.fill(password)
    await this.button.submit.click()
  }
}
