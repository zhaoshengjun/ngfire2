import { Cli8Page } from './app.po';

describe('cli8 App', function() {
  let page: Cli8Page;

  beforeEach(() => {
    page = new Cli8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
