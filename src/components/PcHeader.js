import styles from './HeaderPc.module.css';

import flag from '../assets/home_images/flag.svg'
import NavItemPc from './NavItemPc';

import apps from '../assets/home_images/ikonki/pomocneaplikacje.svg'
import kontakt from '../assets/home_images/ikonki/info.svg'
import info from '../assets/home_images/ikonki/info.svg'
import phone from '../assets/home_images/ikonki/helpphone.svg'
import LogoItem from './LogoItem';
function HeaderPc() {
    return(
        <>
            <div className={styles.HeaderPc}>
              <ul className={styles.ItemList}>
                <NavItemPc src={apps} alt="item">Helpfull apps</NavItemPc>
                <NavItemPc src={kontakt} alt="item">Contact Us</NavItemPc>
                <LogoItem/>
                <NavItemPc src={info} alt="item">Info</NavItemPc>
                <NavItemPc src={phone} alt="item">Important Contacts</NavItemPc>
              </ul>
            </div>
        </>
    )
    
}   export default HeaderPc;