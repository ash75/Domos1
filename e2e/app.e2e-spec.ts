import { DomoticaClientUIPage } from './app.po';

describe('domotica-client-ui App', function() {
  let page: DomoticaClientUIPage;

  beforeEach(() => {
    page = new DomoticaClientUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
