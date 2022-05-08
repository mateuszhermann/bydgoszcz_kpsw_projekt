import React, { useRef } from "react";

import LittleCircles from "./LittleCircles";

export default function MainPage(props) {
  let divEl = useRef(null);
  let widthEndHeight = "200px";

  if (props.windowWidth >= 1400) {
    widthEndHeight = "350px";
  }
  let styles = {
    position: "relative",
    width: widthEndHeight,
    height: widthEndHeight,
    backgroundColor: "#ac5",
    borderRadius: "50%",
    margin: "150px",
  };

  return (
    <div ref={divEl} id={styles.parentdiv} style={styles}>
      <LittleCircles putRef={divEl} windowWidth={props.windowWidth} />
    </div>
  );
}
