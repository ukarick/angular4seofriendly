import { Ang4SeoPage } from './app.po';

describe('ang4-seo App', () => {
  let page: Ang4SeoPage;

  beforeEach(() => {
    page = new Ang4SeoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
