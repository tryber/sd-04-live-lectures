import React from 'react';
import api from '../service/api';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { List, Button, Breadcrumb } from "rbx";

function ListCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    api.getCats().then((res) => {
      console.log(res.data);
      setCats(res.data) 
    });
  }, []);
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Gatos</Breadcrumb.Item>
        <Breadcrumb.Item>Lista</Breadcrumb.Item>
      </Breadcrumb>

      <List>
        {cats.map((cat) => (
          <List.Item as={Link} to={`/details/${cat._id}`} key={cat._id}>{cat.name}</List.Item>
        ))}
      </List>

      <Button as={Link} to="/add" color="link">
        Adicionar
      </Button>
    </>
  );
}

export default ListCats;