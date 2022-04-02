var express  = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/home", (req, res) => {
  res.send("Home page!")
});

app.post("/home", (req, res)=>{
  console.log(req.body)
  res.send(req.body)
})

app.listen(8000, () => {
  console.log("Server running on port 8000");
});