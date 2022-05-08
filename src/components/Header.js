import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <img alt="logo" className={styles.header__logo} />
      <p>Home</p>
      <p>Info</p>
      <p>Contact</p>
      <p>Helpful apps</p>
    </header>
  );
}
