const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

const productsRoutes = require('./routes/products');
const reviewsRoutes = require('./routes/reviews');

const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: '*',
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/products', productsRoutes);
app.use('/api/reviews', reviewsRoutes);

mongoose
  .connect(process.env.LOCAL_URI)
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
