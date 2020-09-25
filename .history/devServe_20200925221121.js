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

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.push({
      id: Date.now().toString(),
      username: req.body.username,
    });
  } catch {}
  req.body.name;
});

app.listen(3000);
