import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { id, title, image, price, freeShipping } = product;
    return (
      <div>
        <Link
          to={ {
            pathname: `/${id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h2>{title}</h2>
            <img src={ image } alt={ title } width="200" />
            <h3>{price}</h3>
            {freeShipping ? <h4 data-testid="free-shipping">Frete Grátis</h4> : ''}
          </div>
        </Link>
        <button
          type="button"
          className="material-icons add-cart"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

Card.propTypes = {

  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    freeShipping: PropTypes.bool.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;
