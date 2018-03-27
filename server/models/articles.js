var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let counter = 1;
// let CountedId = {type: Number, default: () => counter++};

var articleSchema = new mongoose.Schema({
	// articleId: {type: Number, default: CountedId},
	articleTitle: {type: String, isRequired: true},
	articleDesc: {type: String, isRequired: true},
	articleIsHot: {type: Boolean, default: true},
	articleIsLink: {type: Boolean, default: true},
	articleLink: {type: String, default: ''},
	articleContent: {type: String, default: ''},
	articleImage: {type: String, default: ''},
	articleUpdated: { type: Date, default: Date.now }
});

// articleSchema.methods.speak = function () {
// 	var greeting = this.articleLink ? "Meow name is " + this.articleLink : "I don't have a name"
// 	console.log(greeting)
// }

// articleSchema.index({articleId: 1});
module.exports = mongoose.model("Article", articleSchema);

// Model.find({ articleId: { $gt: 0 } }).sort({ articleId: -1 })
//     .then(([first, ...others]) => {
//         if (first)
//             counter = first.articleId + 1;
//     });