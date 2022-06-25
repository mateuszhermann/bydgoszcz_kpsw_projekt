import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "./subpage_components/Icon";
import contact from "../../assets/home_images/ikonki/kontakt.svg";

export default function ContactUs() {
  return (
    <>
      <HeaderPc/>
      <Icon src={contact} alt="item">Skontaktuj sie z nami</Icon>
    </>


  )
}
