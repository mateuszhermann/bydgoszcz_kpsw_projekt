function NavItemPc(props) {
    let styles={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
    }
    
    return (<li>
                <div style={styles}>
                    <img src={props.src} alt={props.alt}/>
                    {props.children}
                </div>
            </li>)
}
export default NavItemPc;