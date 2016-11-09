var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	res.redirect("/index");
});

router.get("/index", function(req, res) {
	burger.selectAll(function(data) {
		var obj = {
			burgers: data
		}
		res.render("index", obj);
	})
});

router.post("/burger/new", function(req, res) {
	burger.insertOne(["burger_name"], [req.body.burger_name], function(data) {
		res.send({redirect:"/index"});
	})
});

router.post("/burger/update", function(req, res) {
	burger.updateOne({devoured: true}, "burger_name=" + "\'" + req.body.burger_name + "\'", function(data) {
		res.send({redirect:"/index"});
	})
});

module.exports = router;