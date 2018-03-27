var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');

mongoose.connect('mongodb://127.0.0.1:27017/blog');

mongoose.connection.on('connected', function (){
	console.log("MongoDB connected success");
});

mongoose.connection.on('error', function (){
	console.log("MongoDB connected fail");
});

mongoose.connection.on('disconnected', function () {
	console.log("MongoDB connected disconnected");
});

/* GET users listing. */
router.post('/login', function (req, res, next) {
	let param = {
		userName: req.body.userName,
		userPwd: req.body.userPwd
	}
	User.findOne(param, function (err, doc){
		if(err){
			res.json({
				status: "1",
				msg: err.message
			})
		}else{
			if(doc){
				res.cookie("userId", doc.userId, {
					path: '/',
					maxAge: 1000*60*60
				})
				res.cookie("userName", doc.userName, {
					path: '/',
					maxAge: 1000*60*60
				})
				res.json({
					status: '0',
					msg: '',
					result: {
						userName: doc.userName
					}
				})
			}else{
				res.json({
					status: "1",
					msg: '账号密码错误'
				})
			}
		}
	})
});

module.exports = router;
