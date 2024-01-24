import styles from './Solutions.module.scss'
import '../index.scss'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'
import { solutions } from '../data'

export const Solutions = () => {
  return (
    <section className={styles.solutions}>
      <div className={styles.solutionsContainer}>
        <div className={styles.solutionsWrapper}>
          <div className="solutions-title-group">
            <div className="solutions-title">
              <div className="descriptor white">compliance solution</div>
              <h1>
                Turn compliance <br /> into revenue
              </h1>
              <p className="solutions-subtitle">
                Elevate your business with automation, real-time monitoring,
                strategic reviews, and case resolution – all tailored to your
                growth journey. We scale with you every step of the way,
                transforming compliance into a revenue driver.
              </p>
            </div>
          </div>

          <div className={styles.solutionsQuote}>
            <div className={styles.quote}>
              <span className={styles.quoteElement}>
                <span>“</span> Compliance is everybody's responsibility and
                spektr is here to help automate it by having developed
                best-in-class compliance automation tool.
              </span>

              <div className={styles.bottom}>
                <div className={styles.info}>
                  <p>Reno Mathews</p>
                  <span className="link-2 font-normal black-6">
                    Chief Compliance Officer at spektr
                  </span>
                </div>
                <div className={styles.logos}>
                  Previously
                  <img
                    src="/images/Solutions/google.svg"
                    alt=""
                    className={styles.logo}
                  />
                  <img
                    src="/images/Solutions/meta.svg"
                    alt=""
                    className={styles.logo}
                  />
                  <img
                    src="/images/Solutions/robinhood.svg"
                    alt=""
                    className={styles.logo}
                  />
                </div>
              </div>
            </div>
            <div className={styles.photo}>
              <img src="/images/Solutions/quote-author.png" alt="" />
            </div>
          </div>

          <h2>
            Replace legacy <br /> systems today
          </h2>
        </div>
        <div className={styles.solutionsList}>
          {solutions.map((s) => (
            <div className={styles.solutionsListItem}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <h3>{s.cardTitle}</h3>
                </div>
                <div className={styles.desc}>
                  <p className="black-5 font-normal">{s.cardDesc}</p>
                  <CircleButton text="Read more" />
                </div>
              </div>
              <div className={styles.body}>
                <CircleButton colorType="secondary" text="Try the product" />
                <div
                  style={{
                    width: `${s.cardWidth}px`,
                    height: `${s.cardHeight}px`,
                  }}
                  className={styles.graph}
                >
                  {s.cardSvg}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
