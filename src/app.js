var express  = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/home", (req, res) => {
  res.send("Home page!")
});

app.post("/home", (req, res)=>{
  var idade = req.body.idade;
  var genero = req.body.genero;
  var generosMusicais = req.body.generosMusicais
  var gostaAnime = req.body.gostaAnime;
  var gostaSeries = req.body.gostaSeries;
  var animes=[];
  var series=[]; 
  
  if(gostaAnime)
    animes = req.body.animes;

  if(gostaSeries)
    series = req.body.series;

  var perfil = {
    idade: idade,
    genero: genero,
    generosMusicais: generosMusicais,
    gostaAnime: gostaAnime,
    gostaSeries: gostaSeries,
    animes: animes,
    series: series
  }

  res.send(perfil);
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});