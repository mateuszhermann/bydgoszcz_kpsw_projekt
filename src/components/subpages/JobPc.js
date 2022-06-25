import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import job from "../../assets/home_images/ikonki/praca.svg";
export default function JobPc() {
  return (
    <>
      <HeaderPc/>
      <Icon src={job} alt="item">Praca</Icon>
    </>
  )
    


}
