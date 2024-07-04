const { default: mongoose } = require("mongoose");

const dbConnect = async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
