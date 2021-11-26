const config = require('./config');
const mongoose = require('mongoose');


const connect = () => {
  try {
    console.log('Connecting to Mongo');
    const options = {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    };
    mongoose.connect(config.db);
    console.log('Connected To Mongo');

  } catch (error) {
    console.log('__An Error Ocurred__', error);
  }
};

module.exports = {
  connect
}