var cloudinary = require("cloudinary").v2;
require('dotenv').config;


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto"
}

const upload = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return r
    })
  })
}



module.exports = {
  upload
}


