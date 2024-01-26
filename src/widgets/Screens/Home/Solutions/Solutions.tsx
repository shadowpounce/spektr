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
            <div className="descriptor">How does it works?</div>
            <h2>
              Built to automate <br /> 90% of your tasks
            </h2>
          </div>
          <div className={styles.solutionsText}>
            <p className="main-text">
              You deserve a platform built with your needs in mind. Manage all
              aspects of your ongoing due diligence journey in a{' '}
              <b>single process map.</b>
            </p>
            <CircleButton text={'Try out the platform'} />
          </div>
        </div>
        <div className={styles.solutionsCards}>
          {solutionsCards.map((card) => (
            <div
              data-duration="1"
              className={clsx(styles.solutionsCard, 'reveal')}
            >
              <div className={styles.solutionsCardGraph}>{card.svg}</div>
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
