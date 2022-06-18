import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import medical from "../../assets/home_images/ikonki/zdrowie.svg";

export default function MedicalSupportPc() {
  return (
    <>
        <HeaderPc/>
        <Icon src={medical} alt="item">Medical Support</Icon>
    </>

  )
}
