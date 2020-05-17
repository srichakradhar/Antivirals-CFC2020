var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'wjjskJNpEjuTjnhVdoYGPw',
    consumer_secret: 'lOoA1jn0nqnz1tDugYCZbOZx67eqrdgIfTaZKpXpGE',
    access_token_key: '271952007-q3VLpGN4IPKvkRlly4qGY9fQHKMOeNVGft2lU08F',
    access_token_secret: '0h8nfecllQwbuOQnFFyHUHRIHQ7jyUwft75Ce6J5yEVrw'
});
var tweets;

async function getweets(){
    tweets = await client.get('search/tweets', {q: 'covid 19 lockdown'});
    console.log(tweets.statuses[0].text);
}

getweets();