import React from "react";
import HeaderPc from "../PcHeader";
import info from "../../assets/home_images/ikonki/info.svg";
import Icon from "../subpages/subpage_components/Icon";

export default function InfoPc() {
  return (
    <>
      <HeaderPc/>
      <Icon src={info} alt="item">Info</Icon>
    </>

  )
}
