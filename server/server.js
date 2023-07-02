const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const feedScreenRoutes = require('./routes/feedScreen')


const app = express()

app.use(express.json())

app.use('/api/feeds',feedScreenRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error)
  })
