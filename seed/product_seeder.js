var Product = require('../models/product');

// connect to local mongodb database: "shopping"
var mongoose = require('mongoose');
var db = 'localhost:27017/shopping';
mongoose.connect(db);
mongoose.connection.once('connected', function() {
	console.log("Connected to database.");
	addProducts();
});

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Apple-Apple.svg/128px-Apple-Apple.svg.png',
		title: 'Product1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum egestas nunc, \
		at laoreet felis consequat sed.',
		price: 1
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Apple-Apple.svg/128px-Apple-Apple.svg.png',
		title: 'Product2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum egestas nunc, \
		at laoreet felis consequat sed.',
		price: 1
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Apple-Apple.svg/128px-Apple-Apple.svg.png',
		title: 'Product3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum egestas nunc, \
		at laoreet felis consequat sed.',
		price: 1
	})
];

function addProducts(){
	var done = 0;
	for (var i = 0; i < products.length; i++) {
		products[i].save(function(err, result){
			done++;
			if (done == products.length){
				exit();
			}
		});
	}
}

function exit(){
	mongoose.disconnect(function(){
		console.log("Database disconnected.")
	});
}