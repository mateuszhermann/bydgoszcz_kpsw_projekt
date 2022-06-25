import React from "react";
import PcHeader from "../PcHeader";
import Icon from "./subpage_components/Icon";
import support from "../../assets/home_images/ikonki/pomocdlauchodzcow.svg";

export default function SupportUkrainePC() {
  return (
    <>
      <PcHeader />
      <Icon src={support} alt="item">Pomoc dla Ukrainy</Icon>
    </>

  )
}
