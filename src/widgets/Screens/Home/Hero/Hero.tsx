import styles from './Hero.module.scss'
import clsx from 'clsx'
import { heroCards } from './data'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <h1 className="text-center">
            Revenue Generating <br />
            Compliance
          </h1>
          <p className="text-2 text-center">
            Unlock growth with risk management that's all about you. Spektr uses
            automation, monitoring and feedback loops to stay in tune with your
            client needs.
          </p>
          <div className={styles.heroWrapperButtons}>
            <a href="" className="button primary">
              Talk to us
              <img
                className="button-arrow"
                src="/images/icons/button-black-arrow-right.svg"
                alt=""
              />
            </a>
            <a href="" className="button secondary">
              Try it yourself
            </a>
          </div>
        </div>
        <div className={styles.heroBlocks}>
          {heroCards.map((card, idx) => (
            <div
              data-delay={`${idx * 0.065}`}
              className={clsx(
                styles.heroBlock,
                'reveal translate-y-1/4 opacity-0'
              )}
            >
              <div className={styles.heroBlockIcon}>
                <img src={card.icon} alt="" />
              </div>
              <div className={styles.heroBlockContent}>
                <div className={styles.text}>
                  <p className={styles.title}>{card.title}</p>
                  <p className={styles.subtitle}>{card.subtitle}</p>
                </div>
                <div className={styles.pills}>
                  {card.pills.map((pill) => (
                    <div className={styles.pill}>{pill}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
