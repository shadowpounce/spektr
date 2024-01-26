import styles from './Solutions.module.scss'
import '../index.scss'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'
import { solutions } from '../data'
import { QuoteBlock } from '../../../../entities/QuoteBlock/QuoteBlock'
import { quote } from './data'

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

          {/* quote */}
          <div className={styles.solutionsQuote}>
            <QuoteBlock previously={true} {...quote} />
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
                  <CircleButton link={true} url={s.link} text="Read more" />
                </div>
              </div>
              <div className={styles.body}>
                <CircleButton
                  link={true}
                  url={'app.spektr.com/login'}
                  colorType="secondary"
                  text="Try the product"
                />
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
