import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../service/api';
import history from "../service/history";
import { Field, Label, Input, Button, Breadcrumb, Notification } from "rbx";

function AddCat() {
  const [name, setName] = useState('');
  const [age, setAge] = useState("");
  const [message, setMesssage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    api
      .addCat(name, age)
      .then((data) => history.push('/'))
      .catch((err) => {
        const { data } = err.response;
        setMesssage(data.message);
      });
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Gatos</Breadcrumb.Item>
        <Breadcrumb.Item>Adicionar</Breadcrumb.Item>
      </Breadcrumb>

      { message 
        ?
        <Notification color="danger" size="small">
        {message}
        </Notification> 
        : ""
      }
      

      <form onSubmit={handleSubmit}>
        <Field>
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Digite o nome"
            onChange={(e) => setName(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Idade</Label>
          <Input
            type="text"
            placeholder="Digite a idade"
            onChange={(e) => setAge(e.target.value)}
          />
        </Field>

        <Button.Group>
          <Button type="submit" color="primary">
            Salvar
          </Button>
          <Button as={Link} to="/">
            Voltar
          </Button>
        </Button.Group>
      </form>
    </>
  );
}

export default AddCat;