import React from 'react';
import { useSelector } from 'react-redux';
import Posts from './components/posts';
import NewPostForm from './components/NewPostForm'


function App() {
  const posts = useSelector(state => state.posts);
  
  return (
    <div>
      <NewPostForm />
      
      <div className="container_hw22">
        { posts.map(post => <Posts {...post} key={post.id} />) }
      </div>  
      
    </div>
  );
}

export default App;
