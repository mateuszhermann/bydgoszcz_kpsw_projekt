import modalImg from "../../../assets/home_images/pomocneaplikacje.jpeg";
import styles from "./ImagePc.module.css";
export default function ImagePc() {
    return (
      <>
          <img src={modalImg} className={styles["subpage-img"]} alt="img" />
      </>
  
    )
  }