import puppeteer from 'puppeteer'

export const getFixtures = async () => {
  const BASE_URL = 'https://www.bet365.com/'
  const URL_FRAGMENT = '#/IP/'

  /** create a browser instance, then a page instance with it */
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  /**
   * bet365 forces a landing page on you, so we navigate to
   * the base url, then go onto the fixtures page
   */
  await page.goto(BASE_URL)
  await page.goto(`${BASE_URL}${URL_FRAGMENT}`)

  /** navigate to the schedule section */
  await page.waitForSelector('.ip-ControlBar_BBarItem')
    .then(async () =>
      (await page.$x("//div[contains(@class, 'ip-ControlBar_BBarItem') and text() = 'Schedule']"))[0]
        .click())

  /** navigate to the soccer section within the schedule */
  await page.waitForSelector('.ips-InPlayNavBarButton')
    .then(async () =>
      (await page.$x("//div[contains(@class, 'ips-InPlayNavBarButton') and text() = 'Soccer']"))[0]
        .click())

  /**
   * find all fixture divs, loop through them and extract
   * the appropriate data (time, home team, away team)
   * into it's own object and return it
   */
  return await page.evaluate(() => {
    const divs = [...document.querySelectorAll('.ips-EventRow')]
    return divs.map(div => {
      return {
        scheduled: div.childNodes[4].textContent,
        teams: {
          home: div.childNodes[1].textContent.split(' v ')[0],
          away: div.childNodes[1].textContent.split(' v ')[1]
        }
      }
    })
  })
}
