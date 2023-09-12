import {test as base, expect} from "@playwright/test";
import LoginPage from "../pages/login";

//our fixture:
const test = base.extend({
  async({page}, use) => {
    await  use(new LoginPage(page))
  },
})

export {test, expect}