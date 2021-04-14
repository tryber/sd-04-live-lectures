import React from 'react';

import ListCats from './components/ListCats';
import AddCat from "./components/AddCat";
import EditCat from "./components/EditCat";
import DetailsCat from "./components/DetailsCat";
import history from "./service/history";

import { Router, Switch, Route } from "react-router-dom";
import "rbx/index.css";
import { Container, Title } from "rbx";

function App() {
  return (
    <Container>
      <Router history={history}>
        <Title>Gatinhos App</Title>

        <Switch>
          <Route exact path="/" component={ListCats} />
          <Route path="/add" component={AddCat} />
          <Route path="/details/:id" component={DetailsCat} />
          <Route path="/cats/edit/:id" component={EditCat} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
