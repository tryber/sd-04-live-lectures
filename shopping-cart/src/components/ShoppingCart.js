import React from 'react';
import { connect } from 'react-redux';

const ShoppingCart = ({ products, totalPrice }) => (
  <div>
    <h2>Carrinho de compras</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
    </ul>
    <div>Total: R${totalPrice.toFixed(2)}</div>
  </div>
);

const mapStateToProps = (state) => ({
  products: state.reducer.cart,
  totalPrice: state.reducer.totalPrice
})

export default connect(mapStateToProps)(ShoppingCart);
// Connecta o react ao store no redux
// o primeiro parametro é a funcao se ler o State

