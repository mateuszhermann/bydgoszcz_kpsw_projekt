import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import selfcare from "../../assets/home_images/ikonki/pomocsocjalna.svg";

export default function SelfcarePc() {
  return (
    <>
      <HeaderPc/>
      <Icon src={selfcare} alt="item">Self Care</Icon>
    
    </>

  )
}
