// post.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


T.post('statuses/update', {
  status: 'hello world! #nodejs'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})