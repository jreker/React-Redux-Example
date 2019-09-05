import React from 'react';
import './App.css';
import User from './js/components/User';
import TweetsInput from './js/components/TweetsInput';
import Tweets from './js/components/Tweets';
import Header from './js/components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
      <User/>
        <hr/>
        <TweetsInput id="3"/> //Example with custom Prop injected to connect component
        <Tweets/>
      </body>
    </div>
  );
}

export default App;
