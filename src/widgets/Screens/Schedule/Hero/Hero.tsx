import clsx from 'clsx'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitle}>
          <h1>Let’s jump on a call</h1>
          <p className={styles.heroSubtitle}>
            Get an introduction to the spektr platform and <br /> how it can
            help your compliance challenges.
          </p>
        </div>
        <div className={styles.heroWrapper}>
          <img
            src="/images/Schedule/pic.png"
            alt=""
            className={styles.heroPicture}
          />
          <div className={styles.heroCalendly}>
            <div className={styles.calendly}></div>

            <p className="black-5">
              No matching time? Reach out to.{' '}
              <img
                src="/images/Schedule/circle.png"
                alt=""
                className={styles.img}
              />{' '}
              Erik on e@spektr.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
