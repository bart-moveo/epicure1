import React, {
  Children,
  ReactChild,
  ReactChildren,
  useEffect,
  useState,
} from "react";
import styles from "../../assets/styles/components/home-section.module.scss";
import { Waypoint } from "react-waypoint";
import { CSSTransition } from "react-transition-group";
import { wait } from "@testing-library/dom";

type props = {
  title?: string;
  background?: string;
  children?: ReactChild | ReactChildren;
};

const HomeSection = ({ title, background = "none", children }: props) => {
  const [inProp, setInProp] = useState(false);

  const onEnter = () => {
    setInProp(true);
  };

  return (
    // <React.Fragment>
    //   <Waypoint onEnter={onEnter} />
    //   <CSSTransition
    //     in={inProp}
    //     timeout={500}
    //     classNames={"transition-1"}
    //     unmountOnExit
    //   >
    <section
      className={
        styles["home-section"] +
        " d-flex " +
        (background === "grey" ? "back-grey" : "")
      }
      data-aos="zoom-in"
    >
      <div className="container">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
    //   </CSSTransition>
    // </React.Fragment>
  );
};

export default HomeSection;
