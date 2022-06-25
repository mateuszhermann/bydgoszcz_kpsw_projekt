import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import socialsupport from "../../assets/home_images/ikonki/rozwojosobiusty.svg";

export default function SocialSupportPc() {
  return (
    <>
      <HeaderPc/>
      <Icon src={socialsupport} alt="item">Pomoc socjalna</Icon>
    </>

  )
}
