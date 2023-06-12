import React, { Component } from "react";
import styles from "./Card.module.css";
import upArrow from "../images/up-arrow-svgrepo-com (1).svg";
import downArrow from "../images/down-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  upHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };

  render() {
    const { image, name, cost , id } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="iphone10" />
        <h3><Link to={`/products/${id}`}>{name}</Link></h3>
        <p>
          {cost}
          <span>$</span>
          {counter >= 2 ? (
            <span>
              {" "}
              * {counter} = {counter * cost}$
            </span>
          ) : (
            ""
          )}
        </p>
        <div className={styles.counter}>
          <img onClick={this.upHandler} src={upArrow} alt="arrow" />
          <span>{counter}</span>
          <img
            className={!this.state.counter && styles.deactivate}
            onClick={this.downHandler}
            src={downArrow}
            alt="arrow"
          />
        </div>
      </div>
    );
  }
}
