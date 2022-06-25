import React from "react";
import styles from "./HelpList.module.css";
import dollar from "../assets/home_images/ikonki/dofinansowanie.svg";
import government from "../assets/home_images/ikonki/pomocurzedowa.svg";
import hearth from "../assets/home_images/ikonki/zdrowie.svg";
import safehouse from "../assets/home_images/ikonki/pomocsocjalna.svg";
import flags from "../assets/home_images/ikonki/pomocdlauchodzcow.svg";
import ideas from "../assets/home_images/ikonki/rozwojosobiusty.svg";
import transport from "../assets/home_images/ikonki/transport.svg";
import uniform from "../assets/home_images/ikonki/praca.svg";
import { Link } from "react-router-dom";
export default function HelpList() {
  const listItems = [
    { avatar: government, text: "Urzędy", path: "/government" },
    { avatar: dollar, text: "Pomoc finansowa", path: "/financialSupport" },
    { avatar: safehouse, text: "Pomoc socjalna", path: "/socialSupport" },
    { avatar: flags, text: "Pomoc dla Ukrainy", path: "/supportUkraine" },
    { avatar: uniform, text: "Praca", path: "/job" },
    { avatar: ideas, text: "Rozwój osobisty", path: "/selfcare" },
    { avatar: transport, text: "Transport", path: "/transport" },
    { avatar: hearth, text: "Pomoc medyczna", path: "/medicalSupport" },
  ];

  return (
    <div className={styles.wrapper}>
      <ul className={styles["help-list"]}>
        {listItems.map((el, index) => (
          <Link to={el.path} key={index} className={styles["help-list__link"]}>
            <li className={styles["help-list__item"]}>
              <img
                className={styles["help-list__img"]}
                src={el.avatar}
                alt={el.avatar}
              />
              <span>{el.text}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
