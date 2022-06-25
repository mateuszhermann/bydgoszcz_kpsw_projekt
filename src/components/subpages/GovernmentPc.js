import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import goverment from "../../assets/home_images/ikonki/pomocurzedowa.svg";

export default function GovernmentPc() {
  return (
    <>
      <HeaderPc/>
      <Icon src={goverment} alt="item">Urzędy</Icon>
    </>

  );
}
