// This is the model that we are going to use in the application

const mongoose = require('mongoose')

// Mongoose schema will take a JavaScript object

const subscriberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subscribedToChannel:{
        type:String,
        required:true
    },
    subscribeDate:{
        type:String,
        required:true,
        default:Date.now
    }
})

// Exporting this model
module.exports = mongoose.model('Subscriber', subscriberSchema)