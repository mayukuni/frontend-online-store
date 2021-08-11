import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
      rating: 0,
    };
  }

  handleChangeReview = (event) => {
    this.setState({
      review: event.target.value,
    });
  }

  handleChangeRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // alert('Ta quase time');
    this.setState({
      review: '',
      rating: 0,
    });
  }

  render() {
    const { info: { history: { location: { state:
      { returnTo: detalhes } } } } } = this.props;
    const { review, rating } = this.state;
    return (
      <div>
        <div data-testid="product-detail-name">
          <p>{detalhes.title}</p>
          <p>{detalhes.image}</p>
          <p>{detalhes.price}</p>
        </div>

        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="text-input">
            <textarea
              id="text-input"
              data-testid="product-detail-evaluation"
              value={ review }
              onChange={ this.handleChangeReview }
            />
          </label>
          <label htmlFor="rating">
            <input
              type="number"
              id="rating"
              min="0"
              max="5"
              value={ rating }
              onChange={ this.handleChangeRating }
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  info: PropTypes.shape({
    history: PropTypes.shape({
      location: PropTypes.shape({
        state: PropTypes.shape({
          returnTo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
