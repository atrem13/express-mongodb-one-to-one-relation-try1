const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.customer = require('./customer.model');
db.identifier = require('./identifier.model');

module.exports = db;