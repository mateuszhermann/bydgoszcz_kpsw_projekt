import React from "react";
import Header from "../components/Header";
import InfoBar from "../components/InfoBar";
import HelpList from "../components/HelpList";

export default function MobileHoc(props) {
  return (
    <>
      <Header />
      {props.children}
      <InfoBar />
      <HelpList />
    </>
  );
}
