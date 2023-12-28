const express = require('express')
const cors = require('cors')
const app = express()
require('./config/db')()


app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

// Routes
const blogRouter = require('./routes/blogRouter')
app.use('/api', blogRouter)




app.listen('3000', () => {
    console.log('server 3000 - portda ishga tushdi');
})