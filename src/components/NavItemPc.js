import React from "react";
import style from "./NavItemPc.module.css";
import {Link} from "react-router-dom";
function NavItemPc(props) {
    let styles={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textDecoration:"none",
        color: "black", 
    }

    return (<li>
                <div >
                   <Link to={props.href} style={styles}>
                        <img src={props.src} style={{width: 120}} className={style.itemImg} alt={props.alt}/>
                        {props.children}
                    </Link>
                </div>
            </li>)
}
export default NavItemPc;