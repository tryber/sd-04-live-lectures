import React, { useState, useEffect }  from 'react';
import { List } from "rbx";
import api from '../services/api';

function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.listPosts()
    .then((response) => {
      setPosts(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <p>List Posts</p>

      <List>
        {posts.map((post) => (
          <List.Item key={post.id}>{post.id} - {post.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default ListPosts;