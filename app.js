const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/todo", (req, res) => {
  res.status(200).render("todo");
});

app.post("/quote", (req, res) => {
  console.log("Quote Request:");
  console.log(req.body);
});

app.listen(process.env.PORT || 8080);
