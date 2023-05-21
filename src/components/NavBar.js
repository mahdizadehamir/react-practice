import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/horse-logo2.jpg";
const NavBar = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.listContianer}>
          <ul className={styles.list}>
            <li>Home Page</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>
        <div >
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
