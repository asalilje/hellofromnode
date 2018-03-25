const express = require('express');
let app = express();

app.get("/", (req, res) =>
{
  res.status(200).send("Hello world from Node on a Raspi!");
});

app.listen(3000, () => {
  console.log("I'm listening.")
});

process.on('SIGINT', () => {
  process.exit();
});

