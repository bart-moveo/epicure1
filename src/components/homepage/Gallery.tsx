import styles from "../../assets/styles/components/gallery.module.scss";
import { gallery } from "../../interfaces/index.interface";
import Card from "./Card";
import { useRef } from "react";
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
        {gallery.cards?.map((item) => (
          <Card card={item} size={gallery.size} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
