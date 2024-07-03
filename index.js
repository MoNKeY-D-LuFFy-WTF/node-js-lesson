const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/user/:username/:id", (req, res) => {
  res.render("user", {
    username: req.params.username,
    id: req.params.id,
    hobbies: ["foot", "basket", "dota"],
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
