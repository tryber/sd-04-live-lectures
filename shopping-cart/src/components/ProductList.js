import React from 'react';
import { products } from '../products';
import { connect } from 'react-redux';
import { addToCart } from '../action';


const ProductList = ({ adicionaAoCarrinho, carrinho }) => {
  const validateQuantity = (product, cart, addToCart) => {
    const productsInCart = cart.filter(item => item.name === product.name)
    console.log(productsInCart)
    if (productsInCart.length === product.stockQuantity) return;
    return addToCart(product)
  }

  return (
    <div>
      <h2>Produtos disponíveis</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>R${product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button
                  type="button"
                  onClick={() => validateQuantity(product, carrinho, adicionaAoCarrinho)}
                >
                  Adicionar
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  adicionaAoCarrinho: (product) => dispatch(addToCart(product))
})

const mapStateToProps = (state) => ({
  carrinho: state.reducer.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);