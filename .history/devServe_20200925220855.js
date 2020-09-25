const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

const user = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Putter" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
  try {
    const hashedPassword = bcrypt.hash(req.body.password);
  } catch {}
  req.body.name;
});

app.listen(3000);
