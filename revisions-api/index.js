const express = require("express");
const app = express();
require("dotenv").config();
const connectMongo = require("./config/mongo");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
