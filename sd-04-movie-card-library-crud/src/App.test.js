import React from 'react';
import { render, cleanup, waitForDomChange, fireEvent } from '@testing-library/react'
import App from './App';


afterEach(cleanup);

describe("Ta rodando os Teste heue", () => {
  test('Algum test', () => {
    expect(true).toBeTruthy();
  })
})

describe('Movie List', () => {
  test('Renderiza `Carregando...` antes de mostrar a lista', () => {
    const { getByText } = render(<App />);

    expect(getByText('Carregando...')).toBeDefined();
    // expect(getByText('Carregando...')).toBeInTheDocument();
  })


  test('Renderiza nomes filmes depois que a pagina carrega', async () => {
    const { queryByText } = render(<App />)

    await waitForDomChange(); // Faz um pause aguarda alteracoes na DOM e depois segue em frente

    expect(queryByText('Carregando...')).toBeNull();
    expect(queryByText('Kingsglaive')).not.toBeNull();
    expect(queryByText('Ghost In The Shell')).not.toBeNull();
    expect(queryByText('Appleseed Alpha')).not.toBeNull();
    expect(queryByText('Final Fantasy')).not.toBeNull();
    expect(queryByText('Resident Evil')).not.toBeNull();
  })

  test('Renderiza detalhes do filme quando clico em ver detalhes', async () => {
    const movieTitles = [
      'Kingsglaive',
      'Final Fantasy', 'Ghost In The Shell',
      'Appleseed Alpha', 'Resident Evil'
    ]

    movieTitles.forEach(async (movieTitle) => {
      const { queryByText, queryByTestId } = render(<App />);

      await waitForDomChange();

      fireEvent.click(queryByTestId(`${movieTitle}Details`));

      await waitForDomChange();

      expect(queryByText(/Genre/)).not.toBeNull();
      expect(queryByText(/Rating/)).not.toBeNull();
    })

  })
})


