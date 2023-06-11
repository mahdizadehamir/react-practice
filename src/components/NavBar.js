import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/horse-logo2.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";
const NavBar = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.listContianer}>
          <ul className={styles.list}>
            <li>
              <Link to="/" >Home Page</Link>
            </li>
            <li>
              <Link to="/products" >Products</Link>
            </li>
            <li>
              <Link to="/" >About</Link>
            </li>
          </ul>
        </div>
        <div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
