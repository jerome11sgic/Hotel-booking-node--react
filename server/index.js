const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const userRoutes = require('./routes/users'),
  rentalRoutes = require('./routes/rentals');


mongoose.connect(config.DB_URL).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
  console.log("db connect");
}).catch(err => console.log(err))

const app = express();
app.use(bodyParser.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log('App is runing');
})

