var express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const connectDB = require('./config/dbConnection')
const transactions = require('./routes/transactions')


dotenv.config({ path: "./config/config.env" })
connectDB()

const app = express()
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan("dev"))
}

app.use('/api/v1/transactions', transactions)
app.get('/', (req, res) => {
  res.send("hello")
})

const PORT = process.env.PORT || 5002

app.listen(PORT, console.log(`Server Running on port ${PORT}`.yellow.bold))