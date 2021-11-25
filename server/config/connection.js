const mongoose = require('mongoose');

const connection = mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = connection;
