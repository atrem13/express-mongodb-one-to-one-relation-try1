const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to mongodb
const db = require('./models/index');
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to mongodb');
}).catch((err) => {
  console.log('cant connect: ', err);
  process.exit();
});

// routes
require('./routes/customer.route')(app, express);
require('./routes/identifier.route')(app, express);

module.exports = app;
