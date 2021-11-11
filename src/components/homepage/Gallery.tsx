import styles from "../../assets/styles/components/gallery.module.scss";
import { gallery } from "../../interfaces/index.interface";
import Card from "./Card";

type props = {
  gallery: gallery;
};

const Gallery = ({ gallery }: props) => {
  console.log(gallery);
  return (
    <div className={styles.gallery}>
      <div
        className={
          gallery.size === "sm"
            ? styles["cards-container-small"]
            : styles["cards-container"]
        }
      >
        {gallery.cards?.map((item) => (
          <Card card={item} size={gallery.size} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
