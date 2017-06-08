
//required variables
var keys = require('./key.js').twitterKeys;
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var client = new Twitter(keys);
var action = process.argv[2];
var twitterName = process.argv[3];

var twitterFunction = function() {
	var params = { screen_name: 'itsmbottalico', count: 20 };
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text);
			} 
		} else {
			console.log(error);
		}
	});
};

	

if (action === 'my-tweets') {
	twitterFunction();
} 

