const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const feedRoutes = require('./routes_controllers/feedController')
const userRoutes = require('./routes_controllers/userController')


const app = express()

app.use(express.json())

app.use('/api/feeds', feedRoutes)
app.use('/api/users', userRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error)
  })
