import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import styles from "./Products.module.css";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) =>
      this.setState({
        products: response.data,
      })
    );
  }
  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((product) => (
            <Card
              key={product.id}
              name={product.title}
              image={product.image}
              cost={product.price}
            />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    );
  }
}
