// follow.js
var Twitter = require('twitter');
var config = require('../config/config.js');
var T = new Twitter(config);
var ts = Math.round(new Date().getTime() / 1000);

var params = {
  q: '#OpenStack OR @aws_actus OR @OpenStackFr',
  count: 10,
  result_type: 'recent',
  lang: 'fr'
}

T.get('search/tweets', params, (err, data, response) => {
  if (err) {
    console.log(ts, err)
  } 
  else {
    data.statuses.forEach(s => {
      var sn = { screen_name: s.user.screen_name }
      T.post('friendships/create', sn, (err, data, response) => {
      if (err) {
        console.log(ts, err)
      } 
      else {
          console.log(ts, 'Followed: ', `${s.user.screen_name}`);
      }
      })
  })
}
})
