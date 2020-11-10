import React, { useState } from 'react';

import api from '../services/api';

import { Field, Label, Input, Button, Notification } from "rbx";
import history from '../services/history';

function AddPost() {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    api.add(title, body).then((res) =>{
      history.push('/posts');
    }).catch((err, x) => {
      console.log(err);
      console.log(err.message);
      console.log(x);
      setMessage("deu ruim!")
    });  
  }

  return (
    <div>
      {message ?
        <Notification color='danger' size='small'>{message}</Notification>
        : ""
      }

      <form onSubmit={handleSubmit}>
        <Field>
          <Label>Título</Label>
          <Input type='text' 
            placeholder='Digite o título do post' 
            onChange={(e) => setTitle(e.target.value)} />
        </Field>

        <Field>
          <Label>Texto</Label>
          <Input type='text' 
            placeholder='Digite o texto do post' 
            onChange={(e) => setBody(e.target.value)} />
        </Field>

        <Button.Group>
          <Button type="submit" color="primary">
            Salvar
          </Button>
          {/* <Button as={Link} to="/">
            Voltar
          </Button> */}
        </Button.Group>
      </form>
    </div>
  );
}

export default AddPost;