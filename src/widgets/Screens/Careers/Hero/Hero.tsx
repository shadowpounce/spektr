import clsx from 'clsx'
import styles from './Hero.module.scss'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitle}>
          <div className="descriptor white">Join us</div>
          <h1>
            Lorem ipsum dolor sit amet <br /> consectetur. Lectus <br /> commodo
            tortor convallis <br />
            volutpat et.
          </h1>
        </div>
        <CircleButton text="See open roles" />
      </div>
    </section>
  )
}
