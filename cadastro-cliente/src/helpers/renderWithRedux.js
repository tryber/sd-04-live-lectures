import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

import rootReducer from '../reducers';

export default function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    ),
    store
  }
}

// {
//   loginReducer: {email: 'xablau', password:'123456'},
//   registerReducer: []
// }


// function renderWithRouter(component, routeConfigs = {}) {
//   const route = routeConfigs.route || '/';
//   const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });

//   //   let renderAntigo ={ 
//   //     render: '',
//   //     history: ''
//   //   }

//   return {
//     ...render(<Router history={history}>{component}</Router>),
//     history
//   }

//   //   let renderNovo = {
//   //     render: <Router history={history}>{component}</Router>,
//   //     history:  history
//   //   }
// }
