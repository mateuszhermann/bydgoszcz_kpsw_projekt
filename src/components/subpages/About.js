import React from "react";
import MobileHoc from "../../hoc/MobileHoc";
// import Hero from '../Hero'
import styles from "../Hero.module.css";
import "./About.css";
import aboutUs from "../../assets/home_images/ikonki/aboutus.svg";
import aboutUsImg from "../../assets/home_images/ikonki/aboutUsImg.png";

export default function About() {
  return (
    <MobileHoc>
      {" "}
      <div className={styles.hero}>
        {/* <img className={styles["hero__main-img"]} src={backgroundImage} alt="" /> */}
        <div className={`${styles.hero__text} ${styles["hero__text-active"]}`}>
          <img
            src={aboutUs}
            alt="aboutUs"
            className={`${styles["img-active"]} ${styles["about-us"]}`}
          />
          <p>
            <strong id={styles.pink}>We are group</strong> of students From
            Poland, Bydgoszcz
          </p>
          <img src={aboutUsImg} alt="" className="about-us-img" />
        </div>
        {/* <div className={styles.flag}>
      <img src={flag} alt="flag"></img>
    </div> */}
      </div>
    </MobileHoc>
  );
}
