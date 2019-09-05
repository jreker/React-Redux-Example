import React, {useState} from 'react'


const TweetsInputViewer = ({addTweet}) => {
    const [tweetText, setTweetText] = useState('');
    
    const getDate = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time
    }

    return (
        <div>
            Tweet Text: <input value={tweetText} onChange={(e) => {setTweetText(e.target.value)}}/>
             <button onClick={() => { addTweet(1,tweetText, getDate()); setTweetText("")}}>Send tweet!</button>
        </div>
    )
}
export default TweetsInputViewer;

