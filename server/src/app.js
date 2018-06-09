const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const Goods = require('../models/goods');
const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SE_Store')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", (callback) => {
    console.log("Connection Succeeded")
});
mongoose.Promise = global.Promise

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.get('/users', async (req, res) => {
    let users = await User.find({})
    res.status(200).json({
        users,
        success: true
    })
})

app.get('/users/:id', async (req, res) => {
    let user = await User.findById(req.params.id)
    res.status(200).json({
        user,
        success: true
    })
})

app.get('/goods', async (req, res) => {
    let data = []
    let goods = await Goods.find({}).exec()
    for (let g of goods) {
        let user = await User.findById(g.supplier, 'firstName familyName').exec()
        data.push({
            id: g.id,
            image: g.image,
            detail: {
                name: g.name,
                price: g.price,
                supplier: `${user.firstName} ${user.familyName}`,
                star: g.star,
                quantity: g.quantity
            }
        })
    }
    res.status(200).json({
        goods: data,
        success: true
    })
})

app.get('/goods/:id', async (req, res) => {
    let goods = await Goods.findById(req.params.id)
    let user = await User.findById(goods.supplier)
    res.status(200).json({
        goods: {
            id: goods.id,
            image: goods.image,
            detail: {
                name: goods.name,
                price: goods.price,
                supplier: `${user.firstName} ${user.familyName}`,
                star: goods.star,
                quantity: goods.quantity
            },
            description: goods.description
        },
        success: true
    })
})

app.post('/goods/:id', async (req, res) => {

    await Goods.findOneAndUpdate({_id: req.params.id}, {$inc: {quantity: -req.body.quantity}})
    res.status(200).json({
        success: true
    })
})

app.listen(process.env.PORT || 8081)
