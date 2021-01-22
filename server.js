const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express();
//this is to parse the data coming through the port. it comes through encrypted, these 2 lines decrypt.
//This is what defines req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows access to the public folder on the client side.
app.use(express.static('public'));

console.log('process.env.MONGODB_URI_NEW!!!!!!!! ', process.env.MONGODB_URI_NEW);
mongoose.connect(process.env.MONGO_URI_NEW, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const apiRoutes = require('./routes/api.js');

apiRoutes(app);

const htmlRoutes = require('./routes/html-routes');
htmlRoutes(app);

// routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
