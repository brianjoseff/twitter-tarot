import React from 'react';
import fetchTwitterFeed from './api/fetchTwitterFeed';


const TwitterFeed = ({ tweets }) => {
  return (
    <div className="twitter-feed">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet">
          <p>{tweet.text}</p>
        </div>
      ))}
    </div>
  );
};


const Tarot = ({ tweets }) => {
  return (
    <div>
      <h1>My Twitter Feed</h1>
      <TwitterFeed tweets={tweets} />
    </div>
  );
};

Tarot.getInitialProps = async () => {
  const tweets = await fetchTwitterFeed('my_username');

  return { tweets };
};

export default Tarot;
