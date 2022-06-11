// importing json and express from express module

const { json } = require('express')
const express = require('express')
const subscriber = require('../models/subscriber')

// importing router from express.
const router = express.Router()
// importing subscriber schema to be used in mongodb
const Subscriber = require('../models/subscriber')

// Getting All
router.get('/', async (req, res) => {

    // You can test the response by sending res.send("Some value")
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getSubscriber, async (req, res) => {
    // res.send(req.params.id)
    res.json(res.subscriber)
})

// Creating One
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        // Status 201 means successfully created an object
        res.status(201).json(newSubscriber)
    } catch (err) {
        // Status 400 means user gave us the bad data
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getSubscriber ,async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json({updatedSubscriber})
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

// Deleting One
router.delete('/:id',getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.status(200).json({message: "Deleted Subscriber"})
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})

// All the routes with id parameter need to call a similar function
// So we are writing a middleware for that.

async function getSubscriber(req, res, next) {
    // next function just says that if you call that function, move on
    // to next part of the code
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json(
                { message: 'Cannot find subscriber' }
            )
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.subscriber = subscriber
    // Calling next function will take you to the next function call
    next()
}

module.exports = router