import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import api from '../services/api';

function DetailPost() {
  let { id } = useParams();

  const [ post, setPost ] = useState({});
  const [ err, setErr ] = useState('');

  useEffect(() => {
    api.getPostById(id)
    .then((response) => {
      setPost(response.data);
    }).catch((err) => {
      setErr('Post não encontrado');
    })
  }, [id]);

  return (
    <div>
      <p>Detalhe do Post</p>
      
      { err ? err : (
        <>
          <h3> {post.id} - {post.title}</h3>

          <p>{post.body}</p>
        </>
      )}      
    </div>
  );
}

export default DetailPost;