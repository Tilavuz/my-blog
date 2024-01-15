const jwt = require('jsonwebtoken')


const adminMiddleware = async (req, res, next) => {
    const token = req.header('x-login-token')

    if(!token) 
        return res.status(401).json({message: 'Saytdan to\'liq foydalanish uchun ro\'yhatdan o\'ting'})
    try {
        const decoded = jwt.verify(token, process.env.JWTKEY)
        req.admin = decoded
        next()
    }catch (err) {
        return res.status(400).json({message: 'Yaroqsiz admin', error: err})
    }
}





module.exports = { adminMiddleware }