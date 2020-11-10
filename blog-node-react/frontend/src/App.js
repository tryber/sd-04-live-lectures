import "rbx/index.css";
import { Container, Title } from "rbx";
import { Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import ListPosts from './components/ListPosts';
import DetailPost from './components/DetailPost.js';
import AddPost from './components/AddPost.js';
import history from './services/history';

function App() {
  return (
    <Container>
      <Router history={history}>
        <Title>Blog App</Title>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={ListPosts} />
          <Route path="/post/add" component={AddPost} />
          <Route path="/post/:id" component={DetailPost} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
