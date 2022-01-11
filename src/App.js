/* eslint-disable no-unused-vars */
import P from "prop-types";
import { useEffect, useState } from 'react';
import "./App.css";

const Post = ({post}) => {
  return (
    <div Key={post.id} className="post">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </div>
  )
}

post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
}

function App() {
  const [posts,setPosts] = useState([]);
  console.log('Pai renderizou')

  // Component did mount
  useEffect(() => {
    setTimeout(function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then (r => r.json())
      .then(r => setPosts(r))
    }, 5000)
  })

  return (
    <div className='App'>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  )
}

export default App;
