
//required variables
var twitterKeys = require('./key.js');
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var client = new Twitter(twitterKeys);
var action = process.argv[2];
var twitterName = process.argv[3];

console.log(twitterKeys);

var twitterFunction = function() {
	var params = { screen_name: 'itsmbottalico', count: 20 };
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text);
			} 
		}
	});
};

	

if (action === 'my-tweets') {
	twitterFunction();
} 

