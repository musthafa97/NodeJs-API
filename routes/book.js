var Book = require("../models/book").Book;

module.exports=function(app){
	
	app.get("/book", function(req, res){
		
		Book.find({}, function(err, books){
			if(err)
				return res.send(err);
			
			res.json(books);
		});
	});
	
	app.get("/book/:id", function(req, res){
		Book.find({"_id":req.params.id}, function(err, book){
			if(err)
				return res.send(err);
			
			res.json(book);
		});
	});
	
}