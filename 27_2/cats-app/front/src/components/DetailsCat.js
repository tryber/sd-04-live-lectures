import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import api from '../service/api';
import history from "../service/history";
import { Link } from 'react-router-dom';

import { Button, Content, Title } from 'rbx';

function DetailsCat() {
  let { id } = useParams();
  const [cat, setCat] = useState({});

  useEffect(()=> {
    api.getCatById(id).then((data) => setCat(data));
  }, [id])

  const removeCat = async (e) => {
    api.removeCat(id).then((data) => history.push('/'));
  }

  return <Content>
    {console.log(cat)}
    <Title size={5}>{cat.name}</Title>

    <span>Idade: {cat.age}</span>

    <Button onClick={removeCat}>Remove</Button>
    <Button as={Link} to={`/cats/edit/${cat._id}`} key={cat._id}>Editar</Button>
  </Content>;
}

export default DetailsCat;