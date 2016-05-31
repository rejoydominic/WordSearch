export class WordSearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('word-search-app h1')).getText();
  }
}
