const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    familyName: String,
    email: String,
    phoneNumber: String,
    image: String,
    type: Number // 0: ordinary, 1: seller
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User
