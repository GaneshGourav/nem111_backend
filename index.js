
const express = require("express");
const app = express();
require("dotenv").config();

const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
app.use(express.json());

app.use("/users", userRouter);

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "You're welcome in HomeSweeter" });
  } catch (error) {
    res.send(500).json("Internal Server Error");
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to DBS");
    console.log("port is running at 7070");
  } catch (error) {
    console.log("Internal Server Error");
  }
});
