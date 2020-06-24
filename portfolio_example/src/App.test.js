import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from './App';


jest.mock('react-router-dom', () => { // Estamos mockando a lib toda.
  const moduloOriginal = jest.requireActual('react-router-dom');
  // Pegando implementacao original da lib.

  // let libAntiga = {
  //   Link: '',
  //   Switch: '',
  //   Route: '',
  //   BrowserRouter: '',
  // }

  return {
    ...moduloOriginal,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  };

  // let libNova = {
  //   Link: '',
  //   Switch: '',
  //   Route: '',
  //   BrowserRouter: ({children}) => (<div>{children}</div>),
  // }

})

function renderWithRouter(ui, routeConfigs = {}) {
  const route = routeConfigs.route || '/';
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  }

}

// this is a handy function that I would utilize for any component
// // that relies on the router being in context
// function renderWithRouter(
//   ui,
//   {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
// ) {

//   let renderAntigo ={ 
//     render: '',
//     history: ''
//   }

//   return {
//     ...render(<Router history={history}>{ui}</Router>),
//     // adding `history` to the returned utilities to allow us
//     // to reference it in our tests (just try to avoid using
//     // this to test implementation details).
//     history,
//   }

//   let renderNovo = {
//     render: <Router history={history}>{ui}</Router>,
//     history:  history
//   }
// }

describe('Testando Rotas', () => {
  // afterEach(cleanup)

  test('Navegando da Home para Projetos', () => { // fui de / para /projetos
    const { getByText } = renderWithRouter(<App />);

    const personalInfo = getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Projetos/i))

    const project = getByText(/Página de projetos/i);
    expect(project).toBeInTheDocument();
  })

  test('Navegando da Home para Comentarios', () => { // quero ir / para /projetos
    const { getByText } = renderWithRouter(<App />);

    const personalInfo = getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Deixe um comentário/i))

    const comentPage = getByText(/Comente!/i)
    expect(comentPage).toBeInTheDocument();
  })

  test('Navegando pra uma rota que nao existe', () => {
    const history = createMemoryHistory();
    const route = '/alguma-rota-por-ai'
    history.push(route);
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    const pageNotFound = getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
  })

})

describe('Formulario de comentario', () => {
  test('Indo a tela de comentario e commenting and show comment on the screen', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />)

    fireEvent.click(getByText(/Deixe um comentário/i));
    fireEvent.change(getByTestId('input-comment'), { target: { value: 'my comment' }});
    fireEvent.click(getByTestId('button-comment'));
    expect(getByText(/my comment/i)).toBeInTheDocument();
    fireEvent.change(getByTestId('input-comment'), { target: { value: 'burgao' }});
    fireEvent.click(getByTestId('button-comment'));
    expect(getByText(/burgao/i)).toBeInTheDocument();
    fireEvent.change(getByTestId('input-comment'), { target: { value: 'xablau' }});
    fireEvent.click(getByTestId('button-comment'));
    expect(getByText(/xablau/i)).toBeInTheDocument();
  });
})