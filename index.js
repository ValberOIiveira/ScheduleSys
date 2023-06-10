const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extendend: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/schedulesys", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
