import React from "react";
function Icon(props) {
    let styles={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textDecoration:"none",
        color: "black",
        width:120,
    }

    return (<li>
                <div >
                    <img src={props.src} style={styles} alt={props.alt} />
                    {props.children}
                </div>
            </li>)
}
export default Icon;