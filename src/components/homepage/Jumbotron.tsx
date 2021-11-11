import styles from "../../assets/styles/components/jumbotron.module.scss";
import SearchBox from "../SearchBox";
const Jumbotron = () => {
  return (
    <div className={styles.jumbotron + " d-flex"}>
      <div className={styles["inside-box"] + " d-flex flex-column"}>
        <span>Epicure works with the top chef restaurants in Tel Aviv</span>
        <SearchBox size="lg" direction="reverse" />
      </div>
    </div>
  );
};

export default Jumbotron;
