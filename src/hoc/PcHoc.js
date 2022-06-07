import React from "react";
import HeaderPc from "../components/PcHeader";

export default function PcHoc(props) {
  return (
    <>
      <HeaderPc />
      {props.children}
    </>
  );
}
