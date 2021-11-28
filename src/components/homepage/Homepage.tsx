import {
  chef,
  dish,
  gallery,
  restaurant,
} from "../../interfaces/index.interface";
import Gallery from "./Gallery";
import HomeSection from "./HomeSection";
import Jumbotron from "./Jumbotron";
import styles from "../../assets/styles/components/homepage.module.scss";
import spicyIcon from "../../assets/images/icons/spicy-icon.svg";
import veganIcon from "../../assets/images/icons/vegan-icon.svg";
import vegetarianIcon from "../../assets/images/icons/vegetarian-icon.svg";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const URI = "http://localhost:3002";

const Homepage = () => {
  const [popularRestaurants, setPopularRestaurants] = useState<any>([]);
  const [signatureDishes, setSignatureDishes] = useState<any>([]);
  const [chefOfTheWeekRestaurants, setChefOfTheWeekRestaurants] = useState<any>(
    []
  );
  const [chefOfTheWeek, setChefOfTheWeek] = useState<any>([]);

  console.log(chefOfTheWeek);

  //const [dishes];

  const restaurantsToGallery1 = (restaurants: restaurant[]): gallery => {
    const gallery1: gallery = { size: "md", seeMoreLink: "#", cards: [] };
    gallery1.cards = restaurants.map((item) => {
      return {
        image: item.image,
        title: item.name,
        content: item.chef.name.fName + " " + item.chef.name.lName,
        link: "#",
      };
    });
    return gallery1;
  };

  const dishesToGallery2 = (dishes: dish[]): gallery => {
    const gallery2: gallery = { size: "lg", seeMoreLink: "#", cards: [] };
    gallery2.cards = dishes.map((item) => {
      return {
        image: item.image,
        title: item.name,
        content: item.ingredients.join(", "),
        link: "#",
        price: item.price,
        icon: item.tags,
        aboveTitle: item.restaurant.name,
      };
    });
    return gallery2;
  };

  const restaurantsToGallery3 = (restaurants: restaurant[]): gallery => {
    const gallery3: gallery = { size: "sm", cards: [] };
    gallery3.cards = restaurants.map((item) => {
      return {
        image: item.image,
        title: item.name,
        link: "#",
      };
    });
    return gallery3;
  };

  useEffect(() => {
    loadData("restaurants?is-popular=true", setPopularRestaurants);
    loadData("dishes?is-signature=true", setSignatureDishes);
    loadData("chefs?of-the-week=true", chefOfTheWeekHandler);
  }, []);

  const loadData = async (path: string, setFunc: any) => {
    try {
      fetch(`${URI}/${path}`, {})
        .then((response) => response.json())
        .then((data) => setFunc(data));
    } catch (err) {
      console.error(err);
    }
  };

  const chefOfTheWeekHandler = (data: any) => {
    console.log(data[0]);
    setChefOfTheWeek(data[0]);
    loadData("restaurants?chef=" + data[0]._id, setChefOfTheWeekRestaurants);
  };

  return (
    <>
      <Jumbotron />
      <HomeSection background="grey">
        <div className={styles["buttons-container"]}>
          <div className="back-sand">CHEFS</div>
          <div className="back-sand">RESTAURANTS</div>
        </div>
      </HomeSection>
      <HomeSection title="THE POPULAR RESTAURANTS IN EPICURE :">
        <Gallery gallery={restaurantsToGallery1(popularRestaurants)} />
      </HomeSection>
      <HomeSection title="SIGNATURE DISH OF :">
        <Gallery gallery={dishesToGallery2(signatureDishes)} />
      </HomeSection>
      <HomeSection title="THE MEANING OF OUR ICONS :" background="grey">
        <div className={styles["icons-container"]}>
          <div>
            <img src={spicyIcon} alt="spicy" />
            <span>Spicy</span>
          </div>
          <div>
            <img src={vegetarianIcon} alt="vegetarian" />
            <span>Vegetarian</span>
          </div>
          <div>
            <img src={veganIcon} alt="vegan" />
            <span>Vegan</span>
          </div>
        </div>
      </HomeSection>

      <HomeSection title="CHEF OF THE WEEK :">
        <div className={styles["week-chef"]}>
          <div className={styles["chef-info"]}>
            <div className={styles["chef-card"]}>
              <div>
                <h3>
                  {chefOfTheWeek.name?.fName + " " + chefOfTheWeek.name?.lName}
                </h3>
              </div>
            </div>
            <div className={styles["chef-text"]}>
              {chefOfTheWeek.description}
            </div>
          </div>
          <div className={styles["chef-restaurants"]}>
            <h3>{chefOfTheWeek.name?.fName}'s restaurants :</h3>
            <Gallery
              gallery={restaurantsToGallery3(chefOfTheWeekRestaurants)}
            />
          </div>
        </div>
      </HomeSection>

      <Footer />
    </>
  );
};

export default Homepage;
