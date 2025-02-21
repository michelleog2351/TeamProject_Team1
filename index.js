var express = require("express");
var bodyParser = require("body-parser");
var _ = require('underscore');
var cors = require("cors");

var admin = require('./model/admin');
var film = require('./model/film');
var screening = require('./model/screening');
// var theatre = require('./model/theatre');
// var ticket = require('./model/ticket');
// var manager = require('./model/manager');
// var booking = require('./model/booking');
// var ticketType = require('./model/ticketType');

var app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/admin/:adminID", function(req,res){
	admin.getAdmin(req,res);
});

app.get("/admins", function(req,res){
	admin.getAdmins(req,res);
});

app.post("/updateAdmin/:adminID", function(req, res) {
    admin.updateAdmin(req, res);
});

app.post("/createAdmin/:name?/:username?/:password?", function(req,res){
	admin.createAdmin(req,res);
});

app.post("/deleteAdmin/:adminID", function(req, res){
    admin.deleteAdmin(req, res);
});

app.get("/films", function(req,res){
    film.getFilms(req, res);
});

app.get("/film/:filmID", function(req,res){
	film.getFilm(req,res);
});

app.post("/updateFilm/:filmID", function(req, res) {
    film.updateFilm(req, res);
});

app.post("/createFilm", function(req, res) {
    film.createFilm(req, res);
});

app.post("/deleteFilm/:filmID", function (req, res) {
    film.deleteFilm(req, res);
});
var myServer = app.listen(3000, function() {
    console.log("Server listening on port 3000");
  });


  app.get("/screening/:screeningID", function(req,res){
	screening.getScreening(req,res);
});


app.get("/screenings/:filmID", function(req,res){
	screening.getScreeningsByFilmID(req,res);
});

app.get("/screenings", function(req,res){
	screening.getScreenings(req,res);
});

app.post("/updateScreening/:screeningID", function(req, res) {
    screening.updateScreening(req, res);
});

app.post("/createScreening", function(req,res){
	screening.createScreening(req,res);
});

app.post("/deleteScreening/:screeningID", function(req, res){
    screening.deleteScreening(req, res);
});
