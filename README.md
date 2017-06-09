# Lena Twitter Bot

## Introduction:

This Node.js dead simple Twitter bot will retweet statuses based on your current search criteria, follow users based on same items, and favorite tweets too.

I'm using this to learn Node.js language and Git.

**Actual Features:** 
- Retweet
- Favorite
- Follow

## Node.js Installation:
Follow this great [guide](https://gist.github.com/nrollr/325e9bc4c35a0523d290b38cfa3c5142) (Applicable to AWS Amazon Linux (EC2))

## Lena Installation:
- `mkdir bot`
- `cd bot`
- `npm init` (follow the wizard)
- `npm install twitter` [more info](https://www.npmjs.com/package/twitter)
- create your own on [dev.twitter.com](https://dev.twitter.com/)
	- `Consumer Key`
	- `Consumer Secret`
	- `Access Token Key`
	- `Access Token Secret`
- Download in your bot folder all .js files

## Lena Configuration:
- Setup your Consumer and Access Token (Key and Secret) in `config.js` file
- Configure your search criteria (`params`), and iteration in each .js file

``` js
var params = {
  q: '#Nodejs OR #Github',
  count: 10,
  result_type: 'recent',
  lang: 'fr'
}
```

- Setup crontab to periodicaly run your Node.js files.
	- `crontab -e`
	- Example for 3 hours scheduling: 

	`* */12 * * *	/usr/local/bin/node /path/to/your/bot/follow.js >> /path/to/your/logs/logs-follow.txt`

## Todo:

- Exception on your own ID (don't follow yourself)
- Add users to public list (to be followed by another Twitter account)
- Follow back followers
- Reply to DM
- Send DM to new followers
- Bio description search
- Timestamp Logs
- #Follow Friday
- etc... 

## Beware:

Beware of the current Twitter [rate limit](https://dev.twitter.com/rest/public/rate-limits)