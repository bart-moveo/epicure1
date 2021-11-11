import { Children, ReactChild, ReactChildren } from "react";
import styles from "../../assets/styles/components/home-section.module.scss";

type props = {
  title?: string;
  background?: string;
  children?: ReactChild | ReactChildren;
};
const HomeSection = ({
  title = "Example Title",
  background = "none",
  children,
}: props) => {
  return (
    <>
      <section
        className={
          styles["home-section"] +
          " d-flex " +
          (background === "grey" ? "back-grey" : "")
        }
      >
        <div className="container">
          <h2>{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
};

export default HomeSection;
