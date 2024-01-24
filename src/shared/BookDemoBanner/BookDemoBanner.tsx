import { CircleButton } from '../CircleButton/CircleButton'
import styles from './BookDemoBanner.module.scss'

export const BookDemoBanner = () => {
  return (
    <div className={styles.bookDemoBanner}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className="descriptor">Get in touch</div>
          <h2>
            Why settle for <br /> the old way?
          </h2>
          <p className="main-text black-5">
            Discover the spektr approach; <br /> reduce chaos, boost revenue
            through <br /> automation-led compliance.
          </p>
          <CircleButton text="Talk with us" />
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/images/Banner/1.png" alt="" className={styles.photo} />
            <div></div>
          </div>
          <div className={styles.card}>
            <img src="/images/Banner/2.png" alt="" className={styles.photo} />
            <div></div>
          </div>
          <div className={styles.card}>
            <img src="/images/Banner/3.png" alt="" className={styles.photo} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
