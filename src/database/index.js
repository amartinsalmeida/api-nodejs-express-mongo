const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest', {
  useNewUrlParser: true,
}).then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
