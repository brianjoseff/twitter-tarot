import React from 'react';
import fetchTwitterFeed from './api/fetchTwitterFeed';


const TwitterFeed = ({ tweets }: {tweets: any}) => {
  return (
    <div className="twitter-feed">
      {tweets.map((tweet: { id: React.Key | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <div key={tweet.id} className="tweet">
          <p>{tweet.text}</p>
        </div>
      ))}
    </div>
  );
};


const Tarot = ({ tweets }: {tweets: any}) => {
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
