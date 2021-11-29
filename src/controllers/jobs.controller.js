'use strict';
const SearchPayLoad = require('../models/Search.model');
const scrapper = require('../../scrapper');

const searchJobs = async (req, res) => {
  const payload = new SearchPayLoad(req.query);
  const scrapperRes = await scrapper(payload);
  res.send(scrapperRes);
  // res.json(payload);
};


module.exports = {
  searchJobs
};