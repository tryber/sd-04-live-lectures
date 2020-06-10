import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Solutions from './Solutions';
import TrybeContent from './TrybeContent';
import Schedule from './Schedule';
import Setup from './Setup';


class Content extends Component {
  render() {
    const diasGabaritos = ["13.1", "13.2", "13.3"]

    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/solutions/:solutionID' component={Solutions} />
          <Route
            path='/solutions'
            render={props => <Solutions {...props} diasGabaritos={diasGabaritos} />}
          />
          <Route path='/schedule' component={Schedule} />
          <Route path='/trybe-content' component={TrybeContent} />
          <Route path='/setup' component={Setup} />
        </Switch>
      </main >
    )
  }
}


// function rotas() {
//   switch (rota) {
//     case '/':
//       <Home />
//       break;

//     case '/solutions':
//       <Solutions />
//       break;

//     default:
//       break;
//   }
// }

export default Content;