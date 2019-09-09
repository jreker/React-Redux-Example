import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware';


import reducer from "./reducers";






const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(createPromise(), thunk, createLogger()),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);


//_------------------------------------------------------------




//const middleware = applyMiddleware(createPromise(), thunk, createLogger())



export default store;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



