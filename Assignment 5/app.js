const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Records";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const recordRouter = require("./routes/recorder");
app.use("/record", recordRouter);

app.listen(9000, () => {
  console.log("Server started");
});
