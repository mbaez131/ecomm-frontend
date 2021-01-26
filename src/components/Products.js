import Data from "../data.json";
import React, { Component } from "react";
const PRICE_FILTER_OPTION_ALL = "All";
const PRICE_FILTER_OPTION_FREE = "Free";
const PRICE_FILTER_OPTION_PAID = "Paid";

class Products extends Component {
  state = { data: Data, priceFilter: PRICE_FILTER_OPTION_ALL};
  getFilteredProducts() {
    const { products } = this.state.data;
    if (this.state.priceFilter === PRICE_FILTER_OPTION_ALL) {
      return products;
    }
    return products.filter(
      (product) => product.price.toLowerCase() === this.state.priceFilter.toLowerCase() 
    );
  }
  handlePriceFilterOnChange(event) {
    this.setState((state) => ({ priceFilter: event.target.value }));
  }

  render() {
    const { priceFilter } = this.state;
    return (
      <main className="cards">
        <select
        className="priceFilter"
          name="priceFilter"
          id="priceFilter"
          value={priceFilter}
          onChange={(e) => this.handlePriceFilterOnChange(e)}
        >
          <option value={PRICE_FILTER_OPTION_ALL}>All</option>
          <option value={PRICE_FILTER_OPTION_PAID}>Paid</option>
          <option value={PRICE_FILTER_OPTION_FREE}>Free</option>
        </select>
        {this.getFilteredProducts().map((card) => {
          return (
            <div key={card.id} className="card">
              <img src={card.image} alt="Sample photo" />
              <div className="card-text">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p>{card.price}</p>
                <button className="product-button">Play here!</button>
              </div>
            </div>
          );
        })}
      </main>
    );
  }
}
export default Products;
