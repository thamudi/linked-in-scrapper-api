require('dotenv').config();
const ATLAS_DB = process.env.ATLAS_DB;
module.exports = {
  db: `mongodb://127.0.0.1:27017/${ATLAS_DB}`
}