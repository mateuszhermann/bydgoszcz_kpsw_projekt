import styles from './HeaderPc.module.css';
import NavItemPc from './NavItemPc';
import apps from '../assets/home_images/ikonki/pomocneaplikacje.svg'
import kontakt from '../assets/home_images/ikonki/kontakt.svg'
import info from '../assets/home_images/ikonki/info.svg'
import phone from '../assets/home_images/ikonki/helpphone.svg'
import LogoItem from './LogoItem';

function HeaderPc() {
    return(
        <>
            <div className={styles.HeaderPc}>
              <ul className={styles.ItemList}>
                <NavItemPc a href={"HelpfullApps"} src={apps} alt="item">Helpfull apps</NavItemPc>
                <NavItemPc a href={"ContactUsPc"} src={kontakt} alt="item">Contact Us</NavItemPc>
                <LogoItem/>
                <NavItemPc a href={"InfoPc"} src={info} alt="item">Info</NavItemPc>
                <NavItemPc a href={"ImportantContacts"} src={phone} alt="item">Important Contacts</NavItemPc>
              </ul>
            </div>
        </>
    )
    
}   export default HeaderPc; 