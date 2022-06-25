import React from "react";
import styles from "./Hero.module.css";
// import backgroundImage from "../assets/home_images/bgImg.svg";\
import aboutUs from "../assets/home_images/ikonki/aboutus.svg";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* <img className={styles["hero__main-img"]} src={backgroundImage} alt="" /> */}
      <div className={styles.hero__text}>
        <p>
          <strong>Byde</strong> to strona internetowa, która zawiera wszystkie niezbędne informacje o Bydgoszczy i znajdujących się w niej instytucjach.
           Z jej pomocą każdy bez problemu odnajdzie potrzebne dla siebie wskazówki, bez konieczności długiego wyszukiwania.
        </p>
        <Link to="/about">
          <img src={aboutUs} alt="aboutUs" className={styles["about-us"]} />
        </Link>
      </div>
      {/* <div className={styles.flag}>
        <img src={flag} alt="flag"></img>
      </div> */}
    </div>
  );
}
