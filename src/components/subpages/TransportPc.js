import React from "react";
import PcHeader from "../PcHeader";
import Icon from "./subpage_components/Icon";
import transport from "../../assets/home_images/ikonki/transport.svg";

export default function TransportPc() {
  return ( 
    <>
      <PcHeader/>
      <Icon src={transport} alt="item">Transport</Icon>
    </>


     )
}
