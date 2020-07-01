let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let db;

let people = [{username: "Jack", pass: "Jill"}, {username: "Matt", pass:"Mackrel"}];


MongoClient.connect("mongodb://localhost:shop/", function(err, client) {
  if(err) throw err;	

  db = client.db('shop');
  
  db.collection("people").insertOne({a:1}, function(err, result){
	  if(err) throw err;
  
	  db.collection("people").drop(function(err, delOK){
		if(err) throw err;
		
		db.collection("people").insertMany(people, function(err, result){
			if(err) throw err;
			process.exit();
		})
	  });
  });
});