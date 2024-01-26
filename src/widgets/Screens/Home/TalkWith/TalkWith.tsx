import clsx from 'clsx'
import styles from './TalkWith.module.scss'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'
import { talkWithCards } from './data'

export const TalkWith = () => {
  return (
    <section className={clsx('section', styles.talkWith)}>
      <div className={styles.talkWithContainer}>
        <div className={styles.talkWithWrapper}>
          <div className={styles.talkWithTitle}>
            <div className="descriptor">Get in touch</div>
            <h2>Speaking compliance, your way.</h2>
          </div>

          <p className="main-text">
            Exploring the latest in regulatory and financial space? Reach out to
            our team for an informal chat covering everything from products to
            legal matters. <b>No need to buy anything, it's just a call.</b>
          </p>
        </div>
        <div className={styles.talkWithCards}>
          {talkWithCards.map((card) => (
            <div className={styles.talkWithCard}>
              <div className={'people-card'}>
                <img src={card.photo} alt="" className={'photo'} />
                <div
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  <CircleButton text="Book a meeting" colorType="secondary" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[1.2vh">
                <p className="text-20 font-semibold">{card.name}</p>
                <span>{card.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
