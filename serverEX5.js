const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "order.html"));
});

app.post("/order", (req, res) => {
  const { item, quantity } = req.body;

  if (!item || !quantity) {
    res.status(400).json({
      message: "items and quantity require",
    });
  }
  res.send(`order:${item} X ${quantity}`);
});

app.listen(PORT, (req, res) => {
  console.log("server is running");
});
