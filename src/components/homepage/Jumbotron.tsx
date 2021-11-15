import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../../assets/styles/components/jumbotron.module.scss";
import SearchBox from "../SearchBox";
const Jumbotron = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => setInProp(true), 250);
    // setInProp(true);
  }, []);

  return (
    <div className={styles.jumbotron + " d-flex"}>
      <CSSTransition
        in={inProp}
        timeout={500}
        // classNames={{
        //   enterActive: styles["inside-box-transition-enter"],
        //   enterDone: styles["inside-box-transition-enter-active"],
        //   exitActive: styles["inside-box-transition-exit"],
        //   exitDone: styles["inside-box-transition-exit-active"],
        // }}
        classNames={"transition-1"}
        unmountOnExit
      >
        <div className={styles["inside-box"] + " d-flex flex-column"}>
          <span>Epicure works with the top chef restaurants in Tel Aviv</span>
          <SearchBox size="lg" direction="reverse" />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Jumbotron;
