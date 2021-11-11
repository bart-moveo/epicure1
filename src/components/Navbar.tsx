import logoPng from "../assets/images/brand-icon/icon.png";
import logo2xPng from "../assets/images/brand-icon/icon@2x.png";
import logo3xPng from "../assets/images/brand-icon/icon@3x.png";
import styles from "../assets/styles/components/navbar.module.scss";
import SearchBox from "./SearchBox";
import userIcon from "../assets/images/icons/user-icon.svg";
import bagIcon from "../assets/images/icons/bag-icon.svg";

const Navbar = () => {
  return (
    <nav className="d-flex">
      <div className="menu-container d-flex">
        <a href="/" className={styles.brand}>
          <img
            src={logoPng}
            srcSet={`${logo2xPng} 2x, ${logo3xPng} 3x`}
            alt="logo"
            className={styles.logo}
          />
          EPICURE
        </a>
        <ul className={styles["nav-list"] + " d-flex flex-row"}>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Chefs</a>
          </li>
        </ul>
        <SearchBox />
        <button className={styles["nav-icon"]}>
          <img src={userIcon} alt="search" />
        </button>
        <button className={styles["nav-icon"]}>
          <img src={bagIcon} alt="search" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
