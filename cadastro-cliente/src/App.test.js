import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import renderWithRedux from './helpers/renderWithRedux';
import App from './App';

describe('cadastro dos cliente', () => {
  const renderWithRouter = (initialEntries = ['/']) => (
    <Router history={createMemoryHistory({ initialEntries })}>
      <App />
    </Router>
  )

  test('renderiza a pagina HOME', () => {
    const { getByText } = renderWithRedux(
      renderWithRouter(),
      { initialState: { registerReducer: [], loginReducer: {} } }
    )
    const textHomePage = getByText('Bem-vindo ao sistema de cadastramento!');
    expect(textHomePage).toBeInTheDocument();
  })

  test('Se não tiver cliente, mostra a mensagem de aviso', () => {
    const { getByText } = renderWithRedux(
      renderWithRouter(['/clients']),
      { initialState: { registerReducer: [], loginReducer: { email: 'cacique@gmail', password: '123456789' } } }
    )

    const clientsInfo = getByText('Nenhum cliente cadastrado');
    expect(clientsInfo).toBeInTheDocument();
  })

  test('Cadastrar tres clientes', () => {
    const { getByText, getByTestId } = renderWithRedux(
      renderWithRouter(['/register']),
      { initialState: { registerReducer: [], loginReducer: { email: 'cacique@gmail', password: '123456789' } } }
    )

    const clientsMock = [
      { name: 'cacique', age: "23", email: 'victor@gmail.com' },
      { name: 'Victor', age: "23", email: 'xablau@gmail.com' },
      { name: 'Burgao', age: "23", email: 'burgao@gmail.com' }
    ]

    const registerName = getByTestId(/^input-register-nome$/);
    const registerIdade = getByTestId(/input-register-idade/);
    const registerEmail = getByTestId(/input-register-email/);

    clientsMock.forEach((client) => {
      fireEvent.change(registerName, { target: { value: client.name } })
      expect(registerName.value).toBe(client.name)

      fireEvent.change(registerIdade, { target: { value: client.age } });
      expect(registerIdade.value).toBe(client.age);

      fireEvent.change(registerEmail, { target: { value: client.email } });
      expect(registerEmail.value).toBe(client.email);

      fireEvent.click(getByText(/Registrar Cliente/i));
    })
  })

  test('clients cadastrados devem ser mostrados', () => {
    const { getByText } = renderWithRedux(
      renderWithRouter(['/register']),
      {
        initialState: {
          registerReducer: [
            { name: 'cacique', age: "23", email: 'victor@gmail.com' },
            { name: 'Victor', age: "23", email: 'xablau@gmail.com' },
            { name: 'Burgao', age: "23", email: 'burgao@gmail.com' }
          ], loginReducer: { email: 'cacique@gmail', password: '123456789' }
        }
      }
    )

    fireEvent.click(getByText(/Ver clientes cadastrados/))

    const client1Name = getByText(/^Nome: cacique$/);
    const client2Name = getByText(/^Nome: Victor$/);
    const client3Name = getByText(/^Nome: Burgao$/);

    expect(client1Name).toBeInTheDocument();
    expect(client2Name).toBeInTheDocument();
    expect(client3Name).toBeInTheDocument();
  })

  test('enrolled clients should be able to be sorted by name', () => {
    const { getByText, getAllByTestId } = renderWithRedux(
      renderWithRouter(['/clients']),
      {
        initialState: {
          registerReducer: [
            { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
            { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
            { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
          ],
          loginReducer: { email: 'usuario001', password: '1234' },
        },
      },
    );

    const originalPositions = getAllByTestId(/client-name/i);
    expect(originalPositions[0].textContent).toBe('Nome: Red');
    expect(originalPositions[1].textContent).toBe('Nome: Ash');
    expect(originalPositions[2].textContent).toBe('Nome: Brock');

    const sortButton = getByText(/Ordenar/i);

    fireEvent.click(sortButton);
    const sortedPositions = getAllByTestId(/client-name/i);
    expect(sortedPositions[0].textContent).toBe('Nome: Ash');
    expect(sortedPositions[1].textContent).toBe('Nome: Brock');
    expect(sortedPositions[2].textContent).toBe('Nome: Red');

    fireEvent.click(sortButton);
    const unsortedPositions = getAllByTestId(/client-name/i);
    expect(unsortedPositions[0].textContent).toBe('Nome: Red');
    expect(unsortedPositions[1].textContent).toBe('Nome: Ash');
    expect(unsortedPositions[2].textContent).toBe('Nome: Brock');
  });

  test('should remove a user after we click in delete button', () => {
    const { getByText, getByTestId, queryAllByTestId } = renderWithRedux(
      renderWithRouter(['/clients']),
      {
        initialState: {
          registerReducer: [
            { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
            { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
            { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
          ],
          loginReducer: { email: 'usuario001', password: '1234' },
        },
      },
    );

    let users = queryAllByTestId(/client-name/i);

    expect(users.length).toBe(3);

    const user1 = getByText('Nome: Red');
    const user2 = getByText('Nome: Ash');
    const user3 = getByText('Nome: Brock');

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).toBeInTheDocument();

    const deleteButton = getByTestId(/button-remove-3/i);

    fireEvent.click(deleteButton);
    users = queryAllByTestId(/client-name/i);

    expect(users.length).toBe(2);
    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).not.toBeInTheDocument();
  });
})