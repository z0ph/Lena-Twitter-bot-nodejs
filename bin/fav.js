// fav.js
var Twitter = require('twitter');
var config = require('/srv/lena-bot/config/config.js');
var T = new Twitter(config);
var ts = Math.round(new Date().getTime() / 1000);

var params = {
  q: '#OpenStack OR @aws_actus OR @OpenStackFr',
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
          console.log(ts, err[0].message);
        }
        // If the favorite is successful, log the url of the tweet
        else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log(ts, 'Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
        }
      });
    }
  } else {
    console.log(ts, err);
  }
})
