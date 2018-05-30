const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SE_Store')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", (callback) => {
    console.log("Connection Succeeded")
});
const User = require('../models/user')

const users = [
    {
        firstName: 'احمد',
        familyName: 'غلامی',
        email: 'ahmad.gholami@gmail.com',
        phoneNumber: '091200000000',
        image: '/static/profile2.jpg',
        type: 0
    },
    {
        firstName: 'علی',
        familyName: 'طباطبایی',
        email: 'a.tabatabaei97@gmail.com',
        phoneNumber: '09128251880',
        image: '/static/profile1.jpg',
        type: 1
    }
]

User.deleteMany({}, err => console.log(err))

for (user of users) {
    let newUser = new User(user)
    newUser.save()
}

// db.close()