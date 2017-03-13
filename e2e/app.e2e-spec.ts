import { KStorePage } from './app.po';

describe('kstore App', function() {
  let page: KStorePage;

  beforeEach(() => {
    page = new KStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
