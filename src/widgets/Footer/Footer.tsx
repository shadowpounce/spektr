import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Logo } from "../../shared/Logo/Logo";

export const Footer = () => {
  return (
    <footer className={clsx("footer", styles.footer)}>
      <div className={styles.footerBody}>
        <div className={styles.footerLogoCol}>
          <div className={styles.footerLogo}>
            <Logo type="secondary" />
          </div>
          <a href="" className={clsx(styles.footerSocialLink, "link")}>
            <img
              src="/images/icons/linkedin.svg"
              alt=""
              className={styles.icon}
            />
            Let’s connect
          </a>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.footerColTitle}>Product</span>
          <ul className={styles.footerColList}>
            <li>
              <a href="">For compliance</a>
            </li>
            <li>
              <a href="">For operations</a>
            </li>
            <li>
              <a href="">Solution 1</a>
            </li>
            <li>
              <a href="">Solution 2</a>
            </li>
            <li>
              <a href="">Solution 3</a>
            </li>
            <li>
              <a href="">Solution 4</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.footerColTitle}>Company</span>
          <ul className={styles.footerColList}>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.footerColTitle}>Resources</span>
          <ul className={styles.footerColList}>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Help center</a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerForm}>
          <div className={styles.desc}>
            <h4 className="text-white">Subscribe for updates</h4>
            <a href="" className="link black-7">
              Stay up to date with all the stuff we're creating - we'll share
              our thoughts behind everything we build.
            </a>
          </div>
          <div className={styles.group}>
            <div className={styles.inputRow}>
              <input
                type="email"
                placeholder="Write your email"
                name=""
                id=""
                className="input"
              />
              <button type="submit" className="btn-submit">
                Subscribe
              </button>
            </div>
            <div className="checkbox-group">
              <input type="text" className="checkbox" />
              <label className="black-7" htmlFor="">
                I agree to receive personalized marketing emails.{" "}
                <span className="underline">Read more.</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <a href="" className="link black-7">
          Primary Headquarters <br />
          Bredgade 75, 4. sal, Copenhagen, 1260, DK
        </a>
        <div className={styles.group}>
          <a href="" className="link black-7">
            Terms of Service
          </a>
          <a href="" className="link black-7">
            Privacy Policy
          </a>
          <a href="" className="link black-7">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
