import {connect} from "react-redux";
import { addTweet } from "../redux/actions/tweetsActions";
import TweetsInputViewer from "./TweetsInputViewer";


const mapDispatchToTweets = dispatch => {
    return {
        addTweet: (id, text, time) => dispatch(addTweet(id, text, time))
    }
};
//Example to inject props to a connected component
const mapStateToProps = (state, ownProps) => {
    console.log("Prop: ",ownProps);
    const id = ownProps.id;
    return { id };
};


export default connect(
    mapStateToProps,
    mapDispatchToTweets
)(TweetsInputViewer)

