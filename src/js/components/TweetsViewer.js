import React from 'react';

const TweetsViewer = ({tweets}) => { 
    const tweetItems = tweets.map((tweet, index) => 
        <tr key={index}>
        <td>{tweet.text}</td>
        <td>{tweet.time}</td>
        </tr>
    );
    return (
        <table className="table">
            <tbody>
                {tweetItems}
            </tbody>
        </table>
    )
};
export default TweetsViewer;