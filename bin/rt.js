// rt.js
var Twitter = require('twitter');
var config = require('../config/config.js');
var T = new Twitter(config);
var ts = Math.round(new Date().getTime() / 1000);

var params = {
  q: '#OpenStack OR @aws_actus',
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
          console.log(ts, err);
        }
        // If the Retweet is successful, log the url of the tweet
        else{
          console.log(ts, 'Retweeted: ', `${data.text}`);
        }
      });
    }
  } else {
    console.log(ts, err);
  }
})
