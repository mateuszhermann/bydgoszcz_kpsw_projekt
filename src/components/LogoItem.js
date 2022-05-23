import Logo from '../assets/home_images/ikonki/logo.svg';
let logo={
    width: "10vw",
}
function LogoItem(props) {
    return(<li> <img src={Logo} style={logo} alt="Logo" /></li>)
}
export default LogoItem;