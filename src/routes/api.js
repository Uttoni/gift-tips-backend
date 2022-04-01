const express = require('express');
const profile = require('../controllers/ProfileController');

const router = express.Router();


module.exports = function(app){
    console.log("dentro de api")
    app.get("/", function(req, res){
        res.send("alguma coisa");
    });
}