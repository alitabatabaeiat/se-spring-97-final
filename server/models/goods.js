const mongoose = require("mongoose")
const Schema = mongoose.Schema
const User = require("./user")

const GoodsSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  number: Number,
  kind: Number, // 0: physical, 1: not physical
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  star: {
    score: Number,
    number: Number
  },
  description: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Goods = mongoose.model("Goods", GoodsSchema)
module.exports = Goods
