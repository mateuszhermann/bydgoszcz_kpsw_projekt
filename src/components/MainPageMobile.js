import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import InfoBar from "./InfoBar";
import HelpList from "./HelpList";
import styles from "./MainPageMobile.module.css";
export default function MainPageMobile() {
  return (
    <>
      <Header />
      <Hero />
      <InfoBar />
      <HelpList />
    </>
  );
}
