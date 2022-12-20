const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let categorySchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Panjang nama kategori minimal 3 karaker'],
      maxLength: [20, 'Panjang nama kategori maksimal 20 karaker'],
      required: [true, 'Nama kategori harus diisi']
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: 'Organizer',
      required: true,
    }
  },
  { timsestamps: true },
);

module.exports = model('Category', categorySchema);