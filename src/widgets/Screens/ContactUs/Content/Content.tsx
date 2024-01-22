import clsx from "clsx";
import styles from "./Content.module.scss";
import { CircleButton } from "../../../../shared/CircleButton/CircleButton";
import { BookDemoBanner } from "../../../../shared/BookDemoBanner/BookDemoBanner";
import GoogleMap from "./GoogleMap";

export const Content = () => {
  return (
    <section className={clsx("section", styles.content)}>
      <div className={styles.newsAndPress}>
        <div className="descriptor">
          Press kit
          <img src="/images/icons/spektr-mini.svg" alt="" />
        </div>
        <div className={styles.text}>
          <h2>News and Press</h2>
          <div className={styles.group}>
            <p className="main-text">
              We love to share our story with the word. Press inquiries and
              opportunities are always welcome at <b>ad@spektr.com.</b>
            </p>
            <p className="main-text">
              Take a look at our press kit to download our logos, snapshots of
              our team and more!
            </p>
            <CircleButton text="Download Press Kit" />
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <div className={styles.googleMap}>
          <GoogleMap />
        </div>
        <div className={styles.mapBlock}>
          <h3>
            Find us in <br /> Copenhagen 🇩🇰
          </h3>
          <div className={styles.group}>
            <div className={styles.line}></div>
            <p className="link black-7">Primary Headquarters</p>
            <h4>Bredgade 75, 4. sal, Copenhagen, 1260, DK</h4>
          </div>
        </div>
      </div>
      <BookDemoBanner />
    </section>
  );
};
