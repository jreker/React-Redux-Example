import React from 'react';
import { applyMiddleware, createStore } from 'redux';

//change state
const reducer = function(state, action) {
    if(action.type === "INC") {
        return state+action.payload;
    }
    else if(action.type === "DEC") {
        return state-action.payload;
    } else if(action.type=== "E") {
        throw new Error("Test");
    }

    return state;
}
//------------------------------

//Middleware runs between every action
const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    //we can also modify the action if we want to
    //action.type = "DEC";
    //no action will be run till we call it via next
    next(action);
};

const error = (store) => (next) => (action) => {
    console.log("action fired", action);

    try{
        next(action);
    } catch(e) {
        console.log("HELP!!",e);
    }
    
};



const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
    console.log("Store Changed", store.getState());
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "INC", payload: 4});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "E", payload: 1});



function Test() {
    console.log("Test");

    return (
        <div>        
        </div>
    )
}

export default Test;
