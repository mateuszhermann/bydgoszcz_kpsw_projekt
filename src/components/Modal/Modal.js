import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import styles from "./Modal.module.css";
import { Portal } from "react-portal";
import aboutUs from "../../assets/home_images/ikonki/aboutus.svg";

import modalImg from "../../assets/home_images/ikonki/aboutUsImg.png";
const Modal = (props, { closeModal }) => {
  // const closeModal = (e) => {
  //   if (modalRef.current === e.target) {
  //     props.closeModal();
  //   }
  // };

  return (
    <Portal node={document && document.getElementById("portal")}>
      <div className={styles.Background} onClick={props.closeModal}>
        {/* <animated.div style={animation}> */}
        <div className={styles.ModalWrapper}>
          <MdClose
            className={styles.CloseModalButton}
            aria-label="Close modal"
            onClick={props.closeModal}
          />
          <div className={styles.Description}>
            <p className={styles.Description__text}>yy</p>
          </div>
          <img src={aboutUs} className={styles["about-us-img"]} alt="aboutUs" />
          <img src={modalImg} className={styles["modal-img"]} alt="img" />
        </div>
        {/* </animated.div> */}
      </div>
    </Portal>
  );
};

export default Modal;
