import styles from './HeaderPc.module.css';
import flag from "../assets/home_images/flag.svg"
import NavItemPc from './NavItemPc';
function HeaderPc() {
    return(
        <>
            <div className={styles.HeaderPc}>
              <ul className={styles.ItemList}>
                <NavItemPc src={flag} alt="item">Helpfull apps</NavItemPc>
                <NavItemPc src={flag} alt="item">Contact Us</NavItemPc>
                <NavItemPc src={flag} alt="item" className={styles.Logo}/>
                <NavItemPc src={flag} alt="item">Info</NavItemPc>
                <NavItemPc src={flag} alt="item">Important Contacts</NavItemPc>
              </ul>
            </div>
        </>
    )
    
}   export default HeaderPc;