import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MiniTwitter from './hw22'


function App() {
  const dispatch = useDispatch();
  const content = useSelector(state => state.content)

  function reatePost (content) {
    dispatch({type:"ADD_POST", payload: content});

  }

  return (
    <div><MiniTwitter />
      <div className="new_post_container">
        <div className="new_post">
          <h1>Create new post</h1>
          <form>
            <label className="new_post_input">
              Your name
              <input type="text" name="name" placeholder="John Doe"/>
            </label>
            <label className="new_post_input">
              Your nickname
              <input type="text" name="nickname" placeholder="@yourNickname"/>
            </label>
            <label className="new_post_input">
              Type your text
              <textarea>
                Example...
              </textarea>
            </label>
            <label className="new_post_input">
              Link to your image
              <input type="text" name="image" placeholder="https://image.com"/>
            </label>
            <button className="new_post_button" onClick={reatePost}>
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
