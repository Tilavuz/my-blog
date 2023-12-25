const express = require('express')
const app = express()
require('./config/db')()
app.use(express.json())

// Routes
const blogRouter = require('./routes/blogRouter')
app.use('/api', blogRouter)




app.listen('3000', () => {
    console.log('server 3000 - portda ishga tushdi');
})