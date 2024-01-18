import clsx from 'clsx'
import styles from './Solutions.module.scss'
import { GsapMagnetic } from '../../../../shared/GsapMagnetic/GsapMagnetic'
import { solutionsCards } from './data'

export const Solutions = () => {
  return (
    <section className={clsx('section', styles.solutions)}>
      <div className={styles.solutionsContainer}>
        <div className={styles.solutionsWrapper}>
          <div className={styles.solutionsTitle}>
            <div className="descriptor">How it works?</div>
            <h2>
              Automate manual <br /> processes
            </h2>
          </div>
          <div className={styles.solutionsText}>
            <p className="main-text">
              Our process map approach streamlines ongoing due diligence,
              offering <b>simplicity, adaptability, and precision. </b>
            </p>
            <GsapMagnetic>
              <button className="button circle-arrow">
                <div className="text">
                  <span>Read more</span>
                  <span>Read more</span>
                </div>
                <div className="arrow">
                  <div className="icon">
                    <img
                      src="/public/images/icons/button-white-arrow-left.svg"
                      alt=""
                    />
                    <img
                      src="/public/images/icons/button-white-arrow-left.svg"
                      alt=""
                    />
                  </div>
                </div>
              </button>
            </GsapMagnetic>
          </div>
        </div>
        <div className={styles.solutionsCards}>
          {solutionsCards.map((card) => (
            <div
              data-duration="1"
              className={clsx(styles.solutionsCard, 'reveal')}
            >
              <div className={styles.solutionsCardText}>
                <p className={styles.title}>{card.title}</p>
                <p className={styles.text}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
