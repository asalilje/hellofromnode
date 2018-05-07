const express = require('express');
let app = express();
const http = require('http');


const on = () => {
  http.get('http://localhost:3200/on');
};

const off = () => {
  http.get('http://localhost:3200/off');
}

app.get("/", (req, res) =>
{
  on();
  console.log("Getting a request");
  res.status(200).send("Hello world from Node on a Raspi!");
  setTimeout(() => off(), 1000);
});

app.listen(3000, () => {
  console.log("I'm listening.")
});

process.on('SIGINT', () => {
  process.exit();
});

