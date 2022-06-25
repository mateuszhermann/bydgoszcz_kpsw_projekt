import React from "react";
import MobileHoc from "../../hoc/MobileHoc";
import styles from "../Hero.module.css";
import aboutUsImg from "../../assets/home_images/aboutUs.png";
export default function Info() {
  return <MobileHoc>
     {" "}
      <div className={styles.hero}>
        <div className={`${styles.hero__text} ${styles["hero__text-active"]}`}>
          <p>
            <strong id={styles.pink}>Informacje o projekcie</strong>Projekt został wykonany przy wykorzystaniu biblioteki REACT.JS w ramach zaliczenia przedmiotu "Programowanie internetowe".
            Każdy z członków grupy odpowiedzialny był za wybrany przez siebie segment np. grafika, programowanie lub research.
          </p>
          <img src={aboutUsImg} alt="" className="about-us-img" />
        </div>
      </div>
  </MobileHoc>;
}
