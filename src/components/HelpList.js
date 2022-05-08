import React from "react";
import styles from "./HelpList.module.css";
import dollar from "../assets/home_images/dollar.png";
import government from "../assets/home_images/government.png";
import hearth from "../assets/home_images/hearth.png";
import safehouse from "../assets/home_images/safehouse.png";
import web from "../assets/home_images/web.png";
export default function HelpList() {
  const listItems = [
    { avatar: government, text: "tax help?" },
    { avatar: dollar, text: "Money providement" },
    { avatar: hearth, text: "Medical support" },
    { avatar: safehouse, text: "Social support" },
    { avatar: web, text: "helpfull aplications" },
  ];

  return (
    <ul className={styles["help-list"]}>
      {listItems.map((el, index) => (
        <li key={index} className={styles["help-list__item"]}>
          <img
            className={styles["help-list__img"]}
            src={el.avatar}
            alt={el.avatar}
          />
          <span>{el.text}</span>
        </li>
      ))}
    </ul>
  );
}
