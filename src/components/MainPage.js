import React, { useRef } from "react";
import Header from "./Header";

import style from "./MainPage.module.css";


import LittlenCircles from "./LittleCircles";
import HeaderPc from "./PcHeader";
import Card from "./Card";

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
    margin: "500px 200px",
    
    
  };

  return (
   <>
      <HeaderPc/>
      <Card tittle="Lorem ipsum">
        Officia dolore et aliqua officia ex sint tempor culpa nostrud consequat anim nostrud consequat. Consectetur est sunt enim ut nulla. Velit laborum et in culpa consectetur nulla fugiat sunt dolore est. Aute anim anim fugiat ut elit adipisicing ad ut amet cillum sint nulla excepteur.
      </Card>
      
        <div ref={divEl} id={styles.parentdiv} style={styles}>
          <LittlenCircles putRef={divEl} windowWidth={props.windowWidth} />
        
        </div>   
      
    
   </>
  );
}
