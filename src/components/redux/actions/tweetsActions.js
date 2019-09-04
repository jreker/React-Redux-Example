import axios from "axios";

//THIS ARE THE FUNCTIONS CALLED BY REACT I THINK
//HERE YOU CAN MAKE YOUR REST CALLS OR ANYTHING ELSE


export function fetchTweets() {
    return function(dispatch) {
        axios.get("http://rest.learncode.academy/api/test123/tweets")
        .then((response) => {
            dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function addTweet() {
    return {
        type: "ADD_TWEET",
        payload: {
            id, 
            text
        }
    }
}

export function updateTweet() {
    return {
        type: "UPDATE_TWEET",
        payload: {
            id,
            text
        }
    }
}