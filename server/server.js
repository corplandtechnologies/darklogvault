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
const axios = require("axios");
const { exec } = require("child_process");

const checkServer = async () => {
  try {
    await axios.get("http://localhost:8080");
    console.log("Server is up and running");
  } catch (error) {
    console.log("Server is down. Restarting...");
    exec("pm2 restart myapp", (err, stdout, stderr) => {
      if (err) {
        console.error(`Error restarting server: ${err}`);
        return;
      }
      console.log(`Server restarted: ${stdout}`);
    });
  }
};

setInterval(checkServer, 60000);

app.use(helmet());
app.use(morgan("common"));
app.use(
  cors({
    origin: [
      "https://darklogvaultapp.onrender.com",
      "http://localhost:5173",
      "https://darklogvaultadmin.onrender.com",
      "https://www.darklogsvault.com",
      "https://darklogsvault.com",
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
