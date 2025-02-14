var express = require("express");
var bodyParser = require("body-parser");
var _ = require('underscore');
var cors = require("cors");

var admin = require('./model/admin');



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




var myServer = app.listen(3000, function() {
    console.log("Server listening on port 3000");
  });