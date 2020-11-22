import React from 'react';
import './App.css';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="App">
      <input type="checkbox" id="click"/>
      <label htmlFor="click">
        <i className="fab fa-facebook-messenger"></i>
        <i className="fas fa-times"></i>
      </label>

      <div className="wrapper">
        <div className="head-text">
          Let's chat? - Online
        </div>
      <div className="chat-box">
      <form action="#">
        <Chat/>
      </form>
      </div>
      </div>
    </div>
  )
}

export default App;
