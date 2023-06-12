import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import iphone10 from "../images/iphone10.jpeg";
import iphone11 from "../images/iphone11.jpeg";
import iphone12 from "../images/iphone12.webp";
import iphone13 from "../images/iphone13.webp";
export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phones: [
        {
          id:1,
          name: "IPHONE X",
          image: iphone10,
          cost: 500,
        },
        {
          id:2,
          name: "IPHONE 11",
          image: iphone11,
          cost: 600,
        },
        {
          id:3,
          name: "IPHONE 12",
          image: iphone12,
          cost: 700,
        },
        {
          id:4,
          name: "IPHONE 13",
          image: iphone13,
          cost: 800 ,
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={iphone10} name="IPHONE X" cost="500" />
        <Card image={iphone11} name="IPHONE 11" cost="600" />
        <Card image={iphone12} name="IPHONE 12" cost="700" />
        <Card image={iphone13} name="IPHONE 13" cost="800" /> */}
        {this.state.phones.map((phone) => (
          <Card
            key={phone.name}
            name={phone.name}
            image={phone.image}
            cost={phone.cost}
            id={phone.id}
          />
        ))}
      </div>
    );
  }
}
