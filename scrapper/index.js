'use strict';
const Job = require('./models/Job.model');
const {
  LinkedinScraper,
  events,
} = require("linkedin-jobs-scraper");
const response = [];

module.exports = async (kwargs) => {
  // Each scraper instance is associated with one browser.
  // Concurrent queries will run on different pages within the same browser instance.
  const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 200,
    args: [
      "--lang=en-US",
    ],
  });

  // Add listeners for scraper events
  scraper.on(events.scraper.data, (data) => {

    const newJob = new Job(data);
    response.push(newJob);
    // console.log('Job Total Count: ', count += 1);
  });

  scraper.on(events.scraper.error, (err) => {
    console.error(err);
    return err;
  });

  scraper.on(events.scraper.end, () => {
    console.log('All done!');
    return JSON.stringify(response);
  });

  // Add listeners for puppeteer browser events
  scraper.on(events.puppeteer.browser.targetcreated, () => {
  });
  scraper.on(events.puppeteer.browser.targetchanged, () => {
  });
  scraper.on(events.puppeteer.browser.targetdestroyed, () => {
  });
  scraper.on(events.puppeteer.browser.disconnected, () => {
  });

  // Custom function executed on browser side to extract job description

  // Run queries concurrently    
  await Promise.all([
    // Run queries serially
    scraper.run(
      kwargs.query.map(query => {
        return ({
          queries: query,
          options: {
            locations: kwargs.locations,
            filters: {
              type: kwargs.type
            },
          },
          limit: kwargs.limit
        })
      })),
  ]);

  // Close browser
  await scraper.close();
};
