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
      <Card tittle="Lorem ipsum">
        Officia dolore et aliqua officia ex sint tempor culpa nostrud consequat
        anim nostrud consequat. Consectetur est sunt enim ut nulla. Velit
        laborum et in culpa consectetur nulla fugiat sunt dolore est. Aute anim
        anim fugiat ut elit adipisicing ad ut amet cillum sint nulla excepteur.
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
