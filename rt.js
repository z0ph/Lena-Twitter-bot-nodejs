// rt.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
  q: '#Nodejs OR #Github',
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