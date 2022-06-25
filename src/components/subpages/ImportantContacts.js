import React from "react";
import HeaderPc from "../PcHeader";
import Icon from "../subpages/subpage_components/Icon";
import important from "../../assets/home_images/ikonki/helpphone.svg";

export default function ImportantContacts() {
  return (
    <>
      <HeaderPc/>
      <Icon src={important} alt="item">Wazne kontakty</Icon>
    </>

  )
}
