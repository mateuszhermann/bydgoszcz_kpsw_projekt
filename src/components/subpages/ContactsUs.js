import React from "react";
import MobileHoc from "../../hoc/MobileHoc";
import styles from "../Hero.module.css";
import kpsw from "../../assets/home_images/kpsw.jpeg";
export default function ContactUs() {
  return <MobileHoc>
     {" "}
      <div className={styles.hero}>
        <div className={`${styles.hero__text} ${styles["hero__text-active"]}`}>
          <p>
            <strong id={styles.pink}>Skontaktuj się z nami!</strong>Znajdziesz nas w siedzibie Kujawsko-Pomorskiej Szkoły Wyższej przy ulicy Toruńskiej 55-57/7B w Bydgoszczy.
          </p>
          <img src={kpsw} alt="" className="about-us-img" />
        </div>
      </div>
  </MobileHoc>;
}
