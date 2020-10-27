import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Comments from './Comments';

function App() {
  return (
    <BrowserRouter> {/* ë como se fosse uma div agrupando todo o codigo*/}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/comments">Deixe um comentário</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <section>
            <h1>Página sobre mim</h1>
          </section>
        </Route>

        <Route path="/projects">
          <section>
            <h1>Página de projetos</h1>
          </section>
        </Route>

        <Route path="/comments">
          <section>
            <Comments />
          </section>
        </Route>

        <Route>
          <section>
            <h1>Página não encontrada</h1>
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
