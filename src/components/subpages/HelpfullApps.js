import React from "react";
import HeaderPc from "../PcHeader";
import helpapps from "../../assets/home_images/ikonki/pomocneaplikacje.svg";
import Icon from "./subpage_components/Icon";
import ImagePc from "./subpage_components/ImagePc";
import styles from "../Hero.module.css";

export default function HelpfullApps() {
  return (
    <>
      <HeaderPc/>
      <Icon src={helpapps} alt="item">Pomocne aplikacje</Icon>
      <ImagePc/>
    </>
    


  )
}

