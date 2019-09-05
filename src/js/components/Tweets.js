import {connect} from "react-redux";
import TweetsViewer from "./TweetsViewer";

const mapStateToTweets = state => {
    return {
        tweets: state.tweets.tweets
    }
};

//Connect this dispatch functions directly with the "dump" component UserViewer
export default connect(
    mapStateToTweets
)(TweetsViewer)

