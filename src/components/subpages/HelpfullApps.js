import React from "react";
import HeaderPc from "../PcHeader";
import helpapps from "../../assets/home_images/ikonki/pomocneaplikacje.svg";
import Icon from "./subpage_components/Icon";

export default function HelpfullApps() {
  return (
    <>
      <HeaderPc/>
      <Icon src={helpapps} alt="item">Helpfull Apps</Icon>
    </>

  )
}
