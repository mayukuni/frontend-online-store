import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      cartItems: [],
      hasItems: false,
    };
  }

  // componentDidMount() {
  //   this.loadCart();
  // }

  addToCart(product) {
    const { cartItems } = this.state;
    if (cartItems.some((item) => item.id === product.id)) {
      cartItems.find((item) => item.id === product.id).quantity += 1;
      this.setState({ cartItems });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          quantity: 1,
          id: product.id,
          product: [product],
        }],
      }));
    }
    this.cartHandleCounter();
  }

  render() {
    const { hasItems } = this.state;
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
          {((hasItems) ? (
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

export default Cart;
