const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const cors =require('cors');

const userRoutes = require('./routes/users'),
  rentalRoutes = require('./routes/rentals');


mongoose.connect(config.DB_URL).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
  console.log("db connect");
}).catch(err => console.log(err))

const app = express();
const configurationOptions ={
  origin:'http://localhost:3000',
  maxAge:3600
}
app.use(bodyParser.json());
app.use('/api/v1/users',cors(configurationOptions), userRoutes);
app.use('/api/v1/rentals',cors(configurationOptions), rentalRoutes);
// app.use(cors({
//   methods:['POST','PUT','DELETE','GET']
// }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log('App is runing');
})

