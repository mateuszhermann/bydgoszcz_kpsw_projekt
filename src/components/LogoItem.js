import { Link } from 'react-router-dom';
import Logo from '../assets/home_images/ikonki/logo.svg';
import styles from "./Header.module.css";
let logo={
    width: "10vw",
}
function LogoItem(props) 
{
    return (
    <li> 
        <Link to={props.href} style={styles}>
            <img src={Logo} style={logo} alt="Logo" />
        </Link >
    </li>)
}
export default LogoItem;