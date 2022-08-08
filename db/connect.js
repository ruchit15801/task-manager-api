const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect("mongodb://localhost:27017/task-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
