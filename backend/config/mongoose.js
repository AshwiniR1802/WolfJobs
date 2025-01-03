const mongoose = require("mongoose");

function connectDB() {
  return mongoose.connect(process.env.MONGODB_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;
