import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import api from '../service/api';
import history from "../service/history";
import { Field, Label, Input, Button, Breadcrumb, Notification } from "rbx";

function EditCat() {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState("");
  const [message, setMesssage] = useState("");

  useEffect(() => {
    console.log(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.updateCat(id, name, age).then((data) => {
      console.log(data);
      history.push(`/details/${id}`);
    });
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Gatos</Breadcrumb.Item>
        <Breadcrumb.Item>Editar</Breadcrumb.Item>
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

export default EditCat;