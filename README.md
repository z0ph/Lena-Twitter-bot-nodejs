# Lena Twitter Bot

## Introduction:

This Node.js dead simple Twitter bot will retweet statuses based on your current search criteria, follow users based on same items, and favorite tweets too.

I'm using this to learn Node.js language and Git.

**Actual Features:** 
- Retweet
- Favorite
- Follow

## Installation:
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

## Configuration:
- Setup your Consumer and Access Token in `config.js` file
- Setup crontab to periodicaly run your nodejs files.
	- `crontab -e`
	- Example for 3 hours scheduling: `* */3 * * *	/usr/local/bin/node /path/to/your/bot/follow.js >> /path/to/your/logs/logs-follow.txt`

## Todo:

- Exception on your own ID (don't follow yourself)
- Add users to public list (to be followed by another Twitter account)
- Follow back followers
- Reply to DM
- Send DM to new followers
- Etc... 

## Beware

Beware of the current Twitter [rate limit](https://dev.twitter.com/rest/public/rate-limits)