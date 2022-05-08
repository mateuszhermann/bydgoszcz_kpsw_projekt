import React from "react";
import styles from "./LittleCircles.module.css";
import flags from "../assets/home_images/flags.png";
import dollar from "../assets/home_images/dollar.png";
import government from "../assets/home_images/government.png";
import hearth from "../assets/home_images/hearth.png";
import ideas from "../assets/home_images/ideas.png";
import safehouse from "../assets/home_images/safehouse.png";
import smartphone from "../assets/home_images/smartphone.png";
import transport from "../assets/home_images/transport.png";
import uniform from "../assets/home_images/uniform.png";
import web from "../assets/home_images/web.png";
export default function LittleCircles(props) {
  const images = [
    flags,
    dollar,
    government,
    hearth,
    safehouse,
    ideas,
    smartphone,
    transport,
    uniform,
    web,
  ];
  var div = 360 / 10;

  let radius = 250;
  let circleElements = [];
  let childdiv = {};
  let elementInnerWidth = 200;
  let offsetToChildCenter = 70;
  if (props.windowWidth >= 1400) {
    radius = 350;
    elementInnerWidth = 350;
    offsetToChildCenter = 100;
  }
  var offsetToParentCenter = parseInt(elementInnerWidth / 2); //assumes parent is square

  // offsetToParentCenter -
  var totalOffset = offsetToParentCenter - offsetToChildCenter;

  for (var i = 1; i <= 10; ++i) {
    var y = Math.sin(div * i * (Math.PI / 180)) * radius;
    var x = Math.cos(div * i * (Math.PI / 180)) * radius;
    // console.log(y + totalOffset + "px");
    childdiv = {
      key: i,
      style: {
        width: offsetToChildCenter * 2,
        height: offsetToChildCenter * 2,
        position: "absolute",
        top: (y + totalOffset).toFixed(0).toString() + "px",
        left: (x + totalOffset).toFixed(0).toString() + "px",
      },
    };
    circleElements[i] = childdiv; // parentdiv.appendChild(childdiv);
  }
  //   console.log(...circleElements);
  return (
    <>
      {circleElements.map((el, index) => (
        <div className={styles.div2} style={el.style} key={el.key}>
          <img className={styles.img} src={images[index - 1]} alt="" />
        </div>
      ))}
    </>
  );
}