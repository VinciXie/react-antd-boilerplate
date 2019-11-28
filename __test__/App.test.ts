import expect from "expect-puppeteer";

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
    await expect(page).toClick("button");
  })

  // it('should display "google" text on page', async () => {
  //   await expect(page).toMatch('google')
  // })
})
