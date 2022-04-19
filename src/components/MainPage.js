import React from "react";
import styles from "./MainPage.module.css";
import flags from "../assets/home_images/flags.png";
import dollar from "../assets/home_images/dollar.png";
import government from "../assets/home_images/government.png";
import hearth from "../assets/home_images/hearth.png";
import ideas from "../assets/home_images/ideas.png";
import safehouse from "../assets/home_images/safehouse.png";
import smartphone from "../assets/home_images/smartphone.png";
import transport from "../assets/home_images/transport.png";
import uniform from "../assets/home_images/uniform.png";
import web from "../assets/home_images/web.png";

export default function MainPage() {
  return (
    <div className={styles.grid}>
      <div></div>
      <div className={styles.grid__element}>
        {/* img placed at 12 o'clock */}
        <img
          src={web}
          className={`${styles.hero__img} ${styles.vertical__middle} ${styles["hero__img--stick__to__bottom"]}`}
          alt="web"
        />
        {/* <img src="https://picsum.photos/70" class="hero-img bottom-left top"/> */}
      </div>

      <div></div>

      <div className={`${styles.grid__element}`}>
        {/* img placed at 9:30 o'clock */}
        <img
          src={government}
          className={`${styles.hero__img} ${styles["hero__img--stick__to__bottom"]} ${styles["hero__img--stick__to__right"]}`}
          alt="government"
        />
        {/* img placed at 8:30 o'clock */}
        <img
          src={hearth}
          className={`${styles.hero__img} ${styles["hero__img--stick__to__right"]}`}
          alt="hearth"
        />
      </div>
      <div className={`${styles.grid__element} ${styles.hero}`}>
        {/* img placed at 11 o'clock */}
        <img
          src={safehouse}
          className={`${styles.hero__img} ${styles["hero__img--stick__to__left__corner"]}`}
          alt="safehouse"
        />
        <h1 className={styles.hero__text}>
          BY
          <br />
          DE
        </h1>
      </div>

      <div className={styles.grid__element}>
        {/* img placed at 1 o'clock */}
        <img
          src={smartphone}
          className={`${styles.hero__img} ${styles["hero__img--stick__to__left__corner"]}`}
          alt="smartphone"
        />
        {/* img placed at 2:30 o'clock */}
        <img
          src={ideas}
          className={`${styles.hero__img}  ${styles["hero__img--stick__to__bottom"]}`}
          alt="ideas"
        />
        {/* img placed at  3:30 o'clock */}
        <img src={flags} className={styles.hero__img} alt="flags" />
      </div>

      <div className={styles.grid__element}></div>
      <div className={styles.grid__element}>
        {/* img placed at 7 o'clock */}
        <img
          src={uniform}
          className={`${styles.hero__img} ${styles["hero__img--stick__to__left__corner"]}`}
          alt="uniform"
        />
        {/* img placed at 6 o'clock */}
        <img
          src={transport}
          className={`${styles.hero__img} ${styles.vertical__middle}`}
          alt="transport"
        />

        {/* <!-- <img src="https://picsum.photos/40" class='hero-img bottom-left'/> --> */}
      </div>
      <div className={styles.grid__element}>
        {/* img placed at 5 o'clock */}
        <img
          src={dollar}
          className={`${styles.hero__img} ${styles["hero__img--stick__to__left__corner"]}`}
          alt="dollar"
        />
      </div>
    </div>
  );
}
