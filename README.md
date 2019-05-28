# Lena Twitter Bot

## Introduction:

This dead simple `nodejs` Twitter bot will retweet statuses based on your current search criteria, follow users based on same items, and favorite tweets too.

I'm using this to learn Node.js language and Git, and serverless stuff.

**Actual Features:** 
- Retweet
- Favorite
- Follow

## Serverless: AWS Lambda installation (recommanded)

On a simple Linux, with AWSCLI installed.

### Install requirement
- AWSCLI: [guide](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) (useless on Amazon Linux EC2)
- Nodejs: Follow this great [guide](https://gist.github.com/nrollr/325e9bc4c35a0523d290b38cfa3c5142) (Applicable to AWS Amazon Linux (EC2))
- Serverless Framework: `npm install -g serverless`

### Create your serverless project 
- `mkdir lena-bot  && cd lena-bot`
- `serverless create -t aws-nodejs`
- `npm init`
- `npm install twitter --save`

### Configure AWSCLI
- `aws configure` with an access key granded to create s3, cloudwatch, and lambda stuff

### Configure your serverless bot
- download config.js, handler, and serverless.yml from Git and adapt to your needs (names, event timer, ...)
- configure your access key (Twitter API) in `config.js`

### deploy your serverless stack
- `serverless deploy --stage prod`

Warning: some Lambda functions won't be scheduled (no lambda triggers). You will need to setup it manually.

## Linux installation (your own server)

### Node.js Installation:
Follow this great [guide](https://gist.github.com/nrollr/325e9bc4c35a0523d290b38cfa3c5142) (Applicable to AWS Amazon Linux (EC2))

### Lena Installation:
- `mkdir bot`
- `cd bot`
- `npm init` (follow the wizard)
- `npm install twitter` [more info](https://www.npmjs.com/package/twitter)
- create your own API Keys on [dev.twitter.com](https://dev.twitter.com/)
	- `Consumer Key`
	- `Consumer Secret`
	- `Access Token Key`
	- `Access Token Secret`
- Clone the git repo : `git clone https://github.com/z0ph/Lena-Twitter-bot.git` 

### Lena Configuration:
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
	- Example for each 12 hours scheduling: 

	`0 */12 * * *	/usr/local/bin/node /path/to/your/bot/follow.js >> /path/to/your/logs/logs-follow.txt`


## Todo:

- Exception on your own ID (don't follow yourself)
- Add users to public list (to be followed by another Twitter account)
- Follow back followers
- Automaticaly Reply to DM
- Send DM to new followers
- Bio description search
- ~~Timestamp Logs~~ (@kallioli) - not needed if you are using Lambda
- Follow Friday
- ~~Serverless compatibility~~
- etc... 

## Beware:

Beware of the current Twitter [rate limit](https://dev.twitter.com/rest/public/rate-limits)
