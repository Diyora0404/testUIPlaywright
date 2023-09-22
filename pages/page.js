//Methods or selectors that repeating on every pages for all pages Cookies, local storage, navBar etc

import Navbar from "../elements/navbar";

export default class Page {
  constructor(page) {
    this.page = page

    this.toast = page.locator('.ant-notification-notice-message')
    this.navbar = new Navbar(page) //он не везде встречается Иногда переноят в др файл

  }


}