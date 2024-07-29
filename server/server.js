const express = require("express");
const app = express();
const PORT = 8080;
const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const useRoutes = require("./routes/src/routes");

app.use(helmet());
app.use(morgan("common"));
app.use(
  cors({
    origin: [
      "https://darklogvaultapp.onrender.com",
      "http://localhost:5173",
      "https://darklogvaultadmin.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

useRoutes(app);

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
