
import style from "./NavItemPc.module.css";
function NavItemPc(props) {
    let styles={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
        
        
    }

    return (<li>
                <div >
                   <a href={props.href } style={styles}>
                        <img src={props.src} style={{width: 120}} className={style.itemImg} alt={props.alt}/>
                        {props.children}
                    </a>
                </div>
            </li>)
}
export default NavItemPc;