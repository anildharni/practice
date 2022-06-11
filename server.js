// Using dotenv to hide your database url

require('dotenv').config()

// importing expresws and using it.
// storing imported express in app variable

const express = require('express')
const app = express()

// import mongoose, connect and store the connection in db

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection

// Describe the actions

db.on('error', (error) => console.error(error))
db.once('open', () => console.error('Connected to Database'))

// App middleware and configuring it to use express

app.use(express.json())

// Specifying subscribers route

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

// Listening to the app on port 3000.

app.listen(3000, () => console.log('Server Started'))