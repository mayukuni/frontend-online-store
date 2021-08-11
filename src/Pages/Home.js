import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
// import { getCategories } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // categories: [],
      cartItems: [],
      products: [],
      categoryId: '',
      query: '',
    };
  }

  fetchProducts = async () => {
    const { categoryId, query } = this.state;
    console.log(categoryId, query);
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    console.log(products);
    this.setState({
      products: products.results,
    });
  }

  handleCategorieChange = (categoryId) => {
    this.setState({
      categoryId,
    }, this.fetchProducts);
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

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
    // this.cartHandleCounter();
  }

  // componentDidMount() {
  //   this.fetchCategories();
  // }

  // fetchCategories = async () => {
  //   const categories = await getCategories();
  //   this.setState({
  //     categories,
  //   });
  // }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            data-testid="query-input"
            value={ query }
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Categories onChange={ this.handleCategorieChange } />
        <div>
          {products.map((product) => (
            <Card
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ product.price }
              id={ product.id }
              freeShipping={ product.shipping.free_shipping }
              addToCart={ this.addToCart }
            />
          ))}
        </div>
      </div>
    );
  }
}
// aa
export default Home;
