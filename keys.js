console.log('this is loaded');
var Twitter = require('twitter');

exports.twitterKeys = new Twitter({
  consumer_key: 'wuImGsR7l6X9LE3UoQtQc5NM5',
  consumer_secret: 'pvTKXH9CuKdMRDu78FNycS58yfWrJyoG8BnG4cAa9PMvY95opM',
  access_token_key: '3297422645-nguD190OQUeNjk77c4D1dfR1IinnMTJ72XgL7rs',
  access_token_secret: 'u8VxT0BKXhooISVyRud6rbz69WKdlD0M7EAs2QTTJpmms',
});


var Spotify = require('node-spotify-api');


exports.spotify = new Spotify({
  id: 'f479e80085bd4437882ee335080ed801',
  secret: '64484f0defca44569651863aaff5add5',
});