import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cartItens } from '../services/cartItens';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itens: [],
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart = () => {
    this.setState({ itens: cartItens });
  }

  renderCartDetail = () => {
    const { itens } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{itens[0].product.title}</h3>
        <h3 data-testid="shopping-cart-product-quantity">{itens[0].quantity}</h3>
      </div>
    );
  }

  render() {
    const { itens } = this.state;
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
          {((itens.length > 0) ? (

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
