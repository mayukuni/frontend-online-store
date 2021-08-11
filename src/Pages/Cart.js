import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadCartFromLocalStorage } from '../services/cartLocalStorage';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart = async () => {
    const itens = await loadCartFromLocalStorage();
    console.log(itens);
    this.setState({ cartItems: itens });
  }

  renderCartDetail = () => (
    <h3>{this.state.cartItems[0].title}</h3>
  )

  render() {
    const { cartItems } = this.state;
    console.log(cartItems);
    return (
      <div className="cart-container">
        <nav className="cart-nav">
          <Link className="material-icons previous" to="/"> arrow_back </Link>
          <div className="cart-nav-title">
            <span className="material-icons cart cart-icon"> shopping_cart </span>
            <h2 className="cart-title">Carrinho de Compras</h2>
          </div>
        </nav>
        <div className="cart-main">
          {((cartItems.length > 0) ? (
            this.renderCartDetail()
          ) : (
            <div className="cart-empty">
              <span className="material-icons empty-bag"> shopping_bag </span>
              <h1 className="cart-empty-title" data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
