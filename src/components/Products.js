import Data from "../data.json";
import React, { Component } from "react";
const PRICE_FILTER_OPTION_ALL = "All";
const PRICE_FILTER_OPTION_FREE = "Free";
const PRICE_FILTER_OPTION_PAID = "Paid";

class Products extends Component {
  state = {
    data: Data,
    priceFilter: PRICE_FILTER_OPTION_ALL,
    platformKeywordSearchString: "",
  };

  filterProductsByPrice(products) {
    if (this.state.priceFilter === PRICE_FILTER_OPTION_ALL) {
      return products;
    }
    return products.filter(
      (product) =>
        product.price.toLowerCase() === this.state.priceFilter.toLowerCase()
    );
  }

  filterProductsByPlatform(products) {
    if (this.state.platformKeywordSearchString === "") {
      return products;
    }

    return products.filter((product) =>
      product.platform
        .toLowerCase()
        .includes(this.state.platformKeywordSearchString.toLowerCase())
    );
  }

  getFilteredProducts() {
    const products = this.state.data.products;
    const filteredProductsByPrice = this.filterProductsByPrice(products);
    const filteredProductsByPlatform = this.filterProductsByPlatform(
      filteredProductsByPrice
    );

    return filteredProductsByPlatform;
  }

  handlePriceFilterOnChange(event) {
    this.setState((state) => ({ priceFilter: event.target.value }));
  }

  handlePlatformFilterOnChange(event) {
    this.setState((state) => ({
      platformKeywordSearchString: event.target.value,
    }));
  }

  render() {
    const { priceFilter, platformKeywordSearchString } = this.state;

    return (
      <div className="products-container">
        <div style={{ backgroundColor: "orange", margin: 15 }}>
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
          <div style={{ float: "right" }}>
            <input
              type="text"
              placeholder="Filter by platform..."
              value={platformKeywordSearchString}
              onChange={(e) => this.handlePlatformFilterOnChange(e)}
            />
          </div>
        </div>

        <div style={{ backgroundColor: "orange", margin: 15 }}>
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
        </div>
      </div>
    );
  }
}
export default Products;
