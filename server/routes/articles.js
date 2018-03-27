var express = require('express');
var router = express.Router();
var Article = require('./../models/articles');

// 获取列表 区分hot or all
router.get('/list', function (req, res, next) {
  	let page = parseInt(req.param("page"));
  	let pageSize = parseInt(req.param("pageSize"));
  	let skip = (page - 1) * pageSize;
  	let articleIsHot = false;
  	let params = {};
  	try{
  		articleIsHot = JSON.parse(req.param("isHot"))
  	}catch(err){
  		articleIsHot = false;
  	}
  	if(articleIsHot){
  		params.articleIsHot = true;
  		let ArticleModels = Article.find(params);
  		ArticleModels.exec(function (err, doc){
  			if(err){
  				res.json({
	            	status:'1',
	            	msg:err.message
          		});
  			}else{
  				res.json({
	              	status:'0',
	              	msg:'',
	              	result:{
	                  	count: doc.length,
	                  	list: doc
	              	}
	          	});
  			}
  		})
  	}else{
  		params.articleIsHot = false;
  		let ArticleModels = Article.find(params).skip(skip).limit(pageSize);
  		ArticleModels.exec(function (err, doc){
  			if(err){
  				res.json({
	            	status:'1',
	            	msg:err.message
          		});
  			}else{
  				res.json({
	              	status:'0',
	              	msg:'',
	              	result:{
	                  	count: doc.length,
	                  	list: doc
	              	}
	          	});
  			}
  		})
  	}
});

// 插入新文章
router.post('/update', function (req, res, next){
	let param = {
		articleTitle: req.body.articleTitle,
		articleDesc: req.body.articleDesc,
		articleIsHot: req.body.articleIsHot,
		articleIsLink: req.body.articleIsLink,
		articleLink: req.body.articleLink || '',
		articleContent: req.body.articleContent || '',
		articleImage: req.body.articleImage,
	};
	// if(false){
		// Article.update({_id: req.body._id}, {$set: param}, function (err, doc){
		// 	if(err){
		// 		res.json({
		// 			status:'1',
		// 			msg: err.message,
		// 			result:''
		// 		});
		// 	}else{
		// 		res.json({
		// 			status:'0',
		// 			msg:'',
		// 			result:'success'
		// 		});
		// 	}
		// })
	// }else{
		console.log(param)
		let article = new Article(param);
		article.save(function (err){
			if(err){
				res.json({
					status:'1',
					msg: err.message,
					result:''
				});
			}else{
				res.json({
					status:'0',
					msg:'',
					result:'success'
				});
			}
		});
	// }
})

module.exports = router;


var addAndUpdateKeys = exports.addAndUpdateKeys = function(keyId,callback){
	Keys.findById(keyId,function(err,doc){
		if(!err && !doc){
			var obj = {};
			obj._id = keyId;
			var keys = new Keys(obj);
			keys.save(function(err,doc){
				if(err){
					callback(null);
					return;
				}
				callback(doc);
			})
		}else{
			Keys.findByIdAndUpdate(keyId,{$inc:{key: 1}}, function(err,doc){
				if(err){
					callback(null);
					return;
				}
				callback(doc);
			})
		}
	});
};