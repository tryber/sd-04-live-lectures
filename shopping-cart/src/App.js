import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/index';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <ProductList />
      <ShoppingCart />
    </Provider>
  );
}

export default App;
