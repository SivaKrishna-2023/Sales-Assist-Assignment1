import { CiSearch, CiBookmark } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./index.module.css";
import { useState } from "react";
import CategoryComponent from "../CategoryComponent";

const NavbarComponent = () => {
  const [isMobileBtnOpened, setIsMobileBtnOpened] = useState(false);

  const onClickShowMobileBtn = () => {
    setIsMobileBtnOpened(!isMobileBtnOpened);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinkSection}>
        <a className={styles.navLogo} href=".">
          TANN TRIM
        </a>
        <div className={styles.navPcButtons}>
          <button className={styles.navButton} type="button">
            <CiSearch size={24} color="white" />
          </button>
          <button className={styles.navButton} type="button">
            <BsPerson size={24} color="white" />
          </button>
          <button className={styles.navButton} type="button">
            <CiBookmark size={24} color="white" />
          </button>
          <button className={styles.navButton} type="button">
            <IoBagOutline size={24} color="white" />
          </button>
          <button
            className={styles.showMobileBtn}
            type="button"
            onClick={onClickShowMobileBtn}>
            <GiHamburgerMenu size={24} color="white" />
          </button>
        </div>
      </div>
      {isMobileBtnOpened && (
        <div className={styles.navMobileButtons}>
          <button className={styles.navButton} type="button">
            <CiSearch size={24} color="white" />
          </button>
          <button className={styles.navButton} type="button">
            <BsPerson size={24} color="white" />
          </button>
          <button className={styles.navButton} type="button">
            <CiBookmark size={24} color="white" />
          </button>
          <button className={styles.navButton} type="button">
            <IoBagOutline size={24} color="white" />
          </button>
        </div>
      )}
      <CategoryComponent />
    </nav>
  );
};

export default NavbarComponent;