const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {


    })
    console.log(`Mongodb connected : ${conn.connection.host}`.green.underline.bold);
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB