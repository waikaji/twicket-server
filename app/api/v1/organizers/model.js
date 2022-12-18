const mongoose = require('mongoose');
const { Schema, model } = mongoose;

let organizersSchema = Schema(
  {
    organizer: {
      type: String,
      required: [true, 'Penyelenggara harus diiisi'],
    },
  },
  { timestamps: true }
);

module.exports = model('Organizer', organizersSchema);