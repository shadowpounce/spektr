import clsx from 'clsx'
import styles from './Solutions.module.scss'
import { solutionsCards } from './data'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'

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
            <CircleButton text={'Read more'} />
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
              <div
                style={{
                  height: card.svgHeight,
                  width: card.svgWidth,
                }}
                className={styles.solutionsCardGraph}
              >
                {card.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
