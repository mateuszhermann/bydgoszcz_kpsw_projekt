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
    { avatar: government, text: "tax help?", path: "/government" },
    { avatar: dollar, text: "Money providement", path: "/financialSupport" },
    { avatar: safehouse, text: "Social support", path: "/socialSupport" },
    { avatar: flags, text: "support ukraine", path: "/supportUkraine" },
    { avatar: uniform, text: "find job", path: "/job" },
    { avatar: ideas, text: "selfcare support", path: "/selfcare" },
    { avatar: transport, text: "transport support", path: "/transport" },
    { avatar: hearth, text: "Medical support", path: "/medicalSupport" },
  ];

  return (
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
  );
}
