import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux part
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  content: "Some text",
  image: "https://source.unsplash.com/200x200/?star-wars",
  authorName: "Chewbaka",
  authorNickname: "@Chewbaka",
  date: "date",
  authorIcon: "https://source.unsplash.com/600x400/?star-wars"
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
      case "ADD_POST": 
        return { ...state, content: action.payload}
      default: 
        return state
    }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
