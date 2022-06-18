import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import financial from "../../assets/home_images/ikonki/dofinansowanie.svg";


export default function DollarPc() {
  return (
    <>
      <HeaderPc/>
      <Icon src={financial} alt="item">FInacial Support </Icon>
    </> 
  )

}
