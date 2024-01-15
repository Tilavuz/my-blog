require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
require('./config/db')()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

// Blog Router
const blogRouter = require('./routes/blogRouter')
app.use('/api', blogRouter)

// Admin Router
const adminRouter = require('./routes/adminRouter')
app.use('/api', adminRouter)



app.listen(port, () => {
    console.log(`server ${port} - portda ishga tushdi`);
})