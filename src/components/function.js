//video tut: https://www.youtube.com/watch?v=Td-2D-_7Y2E&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=20


import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import Axios from 'axios';
import { createPromise } from 'redux-promise-middleware';
//import { composeWithDevTools } from 'redux-devtools-extension';


//Default states ( you can use it for the UI)
const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

//change state
const reducer = function(state=initialState, action) {
    switch(action.type) {
        case "FETCH_USERS_PENDING": {
            return {...state, fetching: true}
            break;
        }case "FETCH_USERS_REJECTED": {
            return {...state, fetching: false, fetched: true, users: action.payload}
            break;
        }case "FETCH_USERS_FULFILLED": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
    }    
    return state;
}


const middleware = applyMiddleware(createPromise(), thunk, createLogger());
const store = createStore(reducer, middleware);


//Asynchronous calls from thunks
store.dispatch({
    type: "FETCH_USERS",
    payload: Axios.get("http://resdt.learncode.academy/api/wstern/users")
});




//---------------------------------
function Test() {
    console.log("Running end");

    return (
        <div>        
        </div>
    )
}

export default Test;
