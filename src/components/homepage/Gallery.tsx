import styles from "../../assets/styles/components/gallery.module.scss";
import { gallery } from "../../interfaces/index.interface";
import Card from "./Card";
import { Carousel } from "@trendyol-js/react-carousel";
import { Children, useEffect, useRef } from "react";
import userIcon from "../../assets/images/icons/user-icon.svg";
import useDraggableScroll from "use-draggable-scroll";

type props = {
  gallery: gallery;
};

const Gallery = ({ gallery }: props) => {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <div className={styles.gallery}>
      <div
        className={
          gallery.size === "sm"
            ? styles["cards-container-small"]
            : styles["cards-container"]
        }
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {/* <Carousel show={3.5} slide={3} swiping={true}> */}
        {gallery.cards?.map((item) => (
          <Card card={item} size={gallery.size} />
        ))}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Gallery;
