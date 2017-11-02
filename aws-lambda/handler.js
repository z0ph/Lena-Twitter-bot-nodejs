'use strict';
module.exports.favourite = (event, context, callback) => {

// fav.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
  q: '#AWS OR @awscloud',
  count: 10,
  result_type: 'recent',
  lang: 'fr'
}

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = { id: data.statuses[i].id_str }
      // Try to Favorite the selected Tweet
      T.post('favorites/create', id, function(err, response){
        // If the favorite fails, log the error message
        if(err){
          console.log(err[0].message);
        }
        // If the favorite is successful, log the url of the tweet
        else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
        }
      });
    }
  } else {
    console.log(err);
  }
})
};

module.exports.rt = (event, context, callback) => {

// rt.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
  q: '#AWS OR @awscloud',
  count: 4,
  result_type: 'recent',
  lang: 'fr'
}

  T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = data.statuses[i].id_str
      let text = data.statuses[i].text
      // Try to Retweet the selected Tweet
      T.post('statuses/retweet/' + id, function(err, data, response) {
        // If the Retweet fails, log the error message
        if(err){
          console.log(err);
        }
        // If the Retweet is successful, log the url of the tweet
        else{
          console.log('Retweeted: ', `${data.text}`);
        }
      });
    }
  } else {
    console.log(err);
  }
})
};

module.exports.follow = (event, context, callback) => {

// follow.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
  q: '#AWS OR @awscloud',
  count: 10,
  result_type: 'recent',
  lang: 'fr'
}

T.get('search/tweets', params, (err, data, response) => {
  if (err) {
    console.log(err)
  }
  else {
    data.statuses.forEach(s => {
      var sn = { screen_name: s.user.screen_name }
      T.post('friendships/create', sn, (err, data, response) => {
      if (err) {
        console.log(err)
      }
      else {
          console.log('Followed: ', `${s.user.screen_name}`);
      }
      })
  })
}
})
};
