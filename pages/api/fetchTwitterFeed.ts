const Twit = require('twit');

const twitterClient = new Twit({
    consumer_key: 'tw106oG79tdd4wkIE0OgGgeaY',
    consumer_secret: '7VmJJtPVs46T8gbxFcIFxcMZX5pqFHTVBzTSwlW002rvfVsd5L',
    access_token: 'your_acceAAAAAAAAAAAAAAAAAAAAAFeLkAEAAAAAH4ofDW8PFThJLYCe%2FOBCeV69Rs8%3DuPfhpJWNi5c6RX7a6dyKg6AJzmjh0J2EqFvMXXWY4uGOgKnVyQss_token',
    access_token_secret: 'your_access_token_secret',
  });

const fetchTwitterFeed = async (username) => {
  const tweets = await twitterClient.get('statuses/user_timeline', {
    screen_name: username,
    count: 10,
  });

  return tweets;
};

export default fetchTwitterFeed;