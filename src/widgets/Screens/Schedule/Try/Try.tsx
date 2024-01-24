import clsx from 'clsx'
import styles from './Try.module.scss'

export const Try = () => {
  return (
    <section className={clsx('section', styles.try)}>
      <div className={styles.tryContainer}>
        <div className={styles.tryWrapper}>
          <img
            src="/images/Schedule/bg.png"
            alt=""
            className={styles.tryBackgroundImage}
          />
          <button className="button primary">
            <img src="/images/icons/rocket.svg" alt="" />
            Try a demo of the platform
          </button>
        </div>
      </div>
    </section>
  )
}
