import { MyfootballNgPage } from './app.po';

describe('myfootball-ng App', function() {
  let page: MyfootballNgPage;

  beforeEach(() => {
    page = new MyfootballNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
