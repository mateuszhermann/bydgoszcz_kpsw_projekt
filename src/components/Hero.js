import React from "react";
import styles from "./Hero.module.css";
// import backgroundImage from "../assets/home_images/bgImg.svg";\
import aboutUs from "../assets/home_images/ikonki/aboutus.svg";
export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* <img className={styles["hero__main-img"]} src={backgroundImage} alt="" /> */}
      <div className={styles.hero__text}>
        <p>
          <strong>Byde</strong> is a site made to support Ukraine. The point of
          it is to provide as much helpfull info as it is possible. We cand
          provide info about:
        </p>
        <img src={aboutUs} alt="aboutUs" />
      </div>
      {/* <div className={styles.flag}>
        <img src={flag} alt="flag"></img>
      </div> */}
    </div>
  );
}
