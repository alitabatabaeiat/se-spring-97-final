const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SE_Store')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", (callback) => {
    console.log("Connection Succeeded")
});
const Goods = require('../models/goods')

const goods = [
    {
        name: 'لپ تاپ',
        image: '/static/3.jpg',
        price: 1200000,
        Number: 10,
        Kind: 0,
        description: '۱۵ اینچ',
        supplier: mongoose.Types.ObjectId("5b0e7b5ed964481bdfdd1665"),
        star: {
            score: 4.7,
            number: 143
        }
    },
    {
        name: 'آبمیوه',
        image: '/static/1.jpg',
        price: 1200,
        Number: 20000,
        Kind: 0,
        description: 'پرتقالی',
        supplier: mongoose.Types.ObjectId("5b0e7b5ed964481bdfdd1665"),
        star: {
            score: 3.2,
            number: 1701
        }
    },
    {
        name: 'کفش ورزشی',
        image: '/static/2.jpg',
        price: 120000,
        Number: 100,
        Kind: 0,
        description: 'نایک',
        supplier: mongoose.Types.ObjectId("5b0e7b5ed964481bdfdd1664"),
        star: {
            score: 2.5,
            number: 893
        }
    },
    {
        name: 'تره فرنگی',
        image: '/static/4.jpg',
        price: 120,
        Number: 10000,
        Kind: 0,
        description: '',
        supplier: mongoose.Types.ObjectId("5b0e7b5ed964481bdfdd1664"),
        star: {
            score: 0.5,
            number: 83
        }
    },
    {
        name: 'آنتی ویروس',
        image: '/static/2.jpg',
        price: 150000,
        Number: 120,
        Kind: 0,
        description: 'کسپراسکای',
        supplier: mongoose.Types.ObjectId("5b0e7b5ed964481bdfdd1665"),
        star: {
            score: 3.6,
            number: 8
        }
    }
]

Goods.deleteMany({}, err => {
    if (err)
        return console.log(err)
    for (g of goods) {
        let newGoods = new Goods(g)
        newGoods.save()
    }
})
// db.close()