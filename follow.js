// follow.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
  q: '#Nodejs OR #Github',
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