import { FlextaskPage } from './app.po';

describe('flextask App', () => {
  let page: FlextaskPage;

  beforeEach(() => {
    page = new FlextaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
