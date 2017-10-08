import { NgProductListPage } from './app.po';

describe('ng-product-list App', () => {
  let page: NgProductListPage;

  beforeEach(() => {
    page = new NgProductListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
