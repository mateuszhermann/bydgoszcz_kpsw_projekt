import React from "react";
import MobileHoc from "../../hoc/MobileHoc";
// import Hero from '../Hero'
import styles from "../Hero.module.css";
import "./About.css";
import aboutUsImg from "../../assets/home_images/aboutUs.png";

export default function About() {
  return (
    <MobileHoc>
      {" "}
      <div className={styles.hero}>
        <div className={`${styles.hero__text} ${styles["hero__text-active"]}`}>
          <p>
            <strong id={styles.pink}> Jesteśmy grupą studentów </strong> Informatyki na Kujawsko-Pomorskiej Szkole Wyższej. Celem naszego projektu „BYDE” jest pomoc w odnalezieniu się w naszym mieście –
             poprzez m.in. wskazanie jego najważniejszych punktów. Wierzymy, że wspólnymi siłami uda się nam osiągnąć ten cel.
          </p>
          <img src={aboutUsImg} alt="" className="about-us-img" />
        </div>
      </div>
    </MobileHoc>
  );
}
