const express = require("express");
const tasks = require("./routes/tasks.js");
const port = process.env.PORT || 3000;
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wellcome to my tasks api");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONG0_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
