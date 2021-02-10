const { Schema, model } = require('mongoose');

const schema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  id: {
    type: String,
  },
  location: {
      type: String,
  },
  in: {
      type: Boolean,
  },
  skills: {
      type: String,
  },
  imgUrl: {
      type: String,
  },
});

module.exports = model('Users', schema);
