
var fs = require('fs');

var req = require('request');

var yek = require('./keys.js');


var option = process.argv[2];

var x = process.argv[3];

check();

function check(){

switch(option){
	case "my-tweets":
		twitter();
		break;
	case "spotify-this-song":
		spotify();
		break;
	case "movie-this":
		omdb();
		break;
	case "do-what-it-says":
		doit();
		break;

	}
}

fs.appendFile("./log.txt", option+",",function(){

	console.log("Successfully written to log");

});

//twitter thing

function twitter(){



	var params = {screen_name: 'james_dimarco_'};

	yek.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for(i=0;i<5;i++){

//write to log.txt
	    console.log(tweets[i].text);
	    	fs.appendFile("./log.txt", tweets[i].text+",",function(){
		});

		}
	  }
	});
}


//movie thing

function omdb(){
	var queryUrl = "http://www.omdbapi.com/?t=" + x + "&y=&plot=short&apikey=trilogy";

	console.log(queryUrl);

	req(queryUrl,"JSON",function(error, data){

		if(error){
			console.log("error");
		}

		var dat = JSON.parse(data.body);

		console.log(dat.Year);

		fs.appendFile("./log.txt", dat.Year+",",function(){
		});


	});
}


//spotify thing

function spotify(){

	fs.readFile("./random.txt","utf8", function(error,data){

		if(error){
			console.log("Fuck");
		}


		var song = data.split(",");
	
	

	yek.spotify.search({ type: 'track', query: song[1] }, function(err, data) {
		if (err) {
		    return console.log('Error occurred: ' + err);
		 }
		 
		console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name,null,2)); 

		fs.appendFile("./log.txt", data.tracks.items[0].album.artists[0].name+",",function(){
		});
		});

	});
}



function doit(){

	fs.readFile("./random.txt","utf8", function(error,data){
		
		if(error){
			console.log("theres a fucking error");
		};


		var arr = data.split(",");

		option = arr[0];

		x = arr[1];
		
		check();

	
		});


}








