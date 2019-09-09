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
        <section>
          <hr/>
            <User/>
          <hr/>
            { 
              //Example with custom Prop injected to connect component 
            }
            <TweetsInput id="3"/> 
            <Tweets/>
        </section>
      </div>
  );
}

export default App;
