import React, { useRef, useEffect, useCallback, useState } from "react";
import Header from "./Header";

import style from "./MainPage.module.css";
import Logo from "../assets/home_images/ikonki/logo.svg";
import aboutUs from "../assets/home_images/ikonki/aboutus.svg";
import LittlenCircles from "./LittleCircles";
import HeaderPc from "./PcHeader";
import Card from "./Card";
import Modal from "./Modal/Modal";
export default function MainPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let divEl = useRef(null);
  let widthEndHeight = "200px";

  if (props.windowWidth >= 1400) {
    widthEndHeight = "350px";
  }
  let styles = {
    position: "relative",
    width: widthEndHeight,
    height: widthEndHeight,

    borderRadius: "50%",
    margin: "500px 200px",
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    },
    [setIsModalOpen, isModalOpen]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      <HeaderPc />
      <Card tittle="BYDE">
      BYDE to strona internetowa, która zawiera wszystkie niezbędne informacje o Bydgoszczy 
i znajdujących się w niej instytucjach. Z jej pomocą każdy bez problemu odnajdzie potrzebne dla siebie wskazówki, bez konieczności długiego wyszukiwania. 

      </Card>

      <div ref={divEl} id={styles.parentdiv} style={styles}>
        <LittlenCircles putRef={divEl} windowWidth={props.windowWidth} />
        <img src={Logo} alt="Logo" />
        <img
          onClick={() => setIsModalOpen(true)}
          src={aboutUs}
          alt="aboutUs"
          className={style["main-page-about-us-img"]}
        />
        {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
      </div>
    </>
  );
}
