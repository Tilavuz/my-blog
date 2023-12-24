const mongoose = require('mongoose')

const connectdb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/myblogs').then(() => {
        console.log('Mongodb ga ulanish hosil qilindi');
    }).catch(() => {
        console.log('Mongodbga ulanib bo\'lmadi');
    })
}


module.exports = connectdb