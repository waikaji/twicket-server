const Images = require('../../api/v1/images/model');


// generate url setelah submit baru kita simpan
const generateUrlImage = async (req) => {
  const result = `uploads/${req.file.filename}`;

  return result;
}

// cara yang kita gunakan untuk menyimpan gambar
const createImages = async (req) => {
  const result = await Images.create({
    name: req.file ? 
    `uploads/${req.file.filename}` :
    `uploads/avatar/default.jpg`,
  });

  return result;
}

module.exports = { createImages, generateUrlImage };