import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/home_images/ikonki/logo.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/contact" className={styles.header_link}>
        Skontaktu się z nami
      </Link>
      <Link to="/" className={`${styles.header_link} ${styles.header__logo}`}>
        <img alt="logo" src={Logo} />
      </Link>
      <Link to="/info" className={styles.header_link}>
        Informacje
      </Link>
    </header>
  );
}
