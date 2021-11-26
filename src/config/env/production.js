require('dotenv').config();

const ATLAS_USER = process.env.ATLAS_USER;
const ATLAS_PASS = process.env.ATLAS_PASS;
const ATLAS_DB = process.env.ATLAS_DB;

module.exports = {
  db: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASS}@cluster0.qgomu.mongodb.net/${ATLAS_DB}?retryWrites=true&w=majority`
}