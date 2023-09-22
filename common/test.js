//our fixture to call (POM):
import {test as base, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage'

const test = base.extend({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  },
})

export {test, expect}