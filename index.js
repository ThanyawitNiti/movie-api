require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const movieRoute = require('./routes/movie-route')
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/movie',movieRoute)





const port =process.env.PORT || 8000
app.listen(port,()=>console.log('Server on',port))