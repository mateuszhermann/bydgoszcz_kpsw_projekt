import React from "react";
import styles from "./Hero.module.css";
// import backgroundImage from "../assets/home_images/bgImg.svg";\
import flag from "../assets/home_images/flag.svg";
export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* <img className={styles["hero__main-img"]} src={backgroundImage} alt="" /> */}
      <div className={styles.hero__text}>
        <p>
          <strong>Byde</strong> is a site made for helping people of Ukraine.
          Our idea is providing as much info as possible.
        </p>
      </div>
      <div className={styles.flag}>
        <img src={flag} alt="flag"></img>
      </div>
    </div>
  );
}
