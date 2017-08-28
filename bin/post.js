// post.js
var Twitter = require('twitter');
var config = require('../config/config.js');
var T = new Twitter(config);
var ts = Math.round(new Date().getTime() / 1000);


T.post('statuses/update', {
  status: 'hello world! #nodejs'
}, (err, data, response) => {
  if (err) {
    console.log(ts, err)
  } else {
    console.log(ts, `${data.text} tweeted!`)
  }
})
