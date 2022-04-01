const express  = require('express');
const path = require('path');
const mainRoutes = require('./src/routes/api');

const server = express();

//server.set('views', path.join(__dirname, 'views'));

//server.use(express.static(path.join(__dirname, '../public')));

//ROUTES
server.use(mainRoutes);

//server.use((req, res) => {
  //  res.render('pages/page404');
//});

console.log("cheguei antes da porta");
server.listen(3355, () => {
    console.log("ta rodando na 3355");
});