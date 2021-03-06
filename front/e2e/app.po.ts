import { browser, element, by } from 'protractor';

export class FrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gb-root h1')).getText();
  }
}
