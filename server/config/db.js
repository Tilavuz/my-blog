const mongoose = require('mongoose')

const connectdb = () => {
    mongoose.connect(`${process.env.MDCON}/myblogs`).then(() => {
        console.log('Mongodb ga ulanish hosil qilindi');
    }).catch(() => {
        console.log('Mongodbga ulanib bo\'lmadi');
    })
}


module.exports = connectdb