import clsx from 'clsx'
import styles from './UseCases.module.scss'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'

export const UseCases = () => {
  return (
    <section className={clsx('section', styles.useCases)}>
      <div className={styles.useCasesContainer}>
        <div className={styles.useCasesWrapper}>
          <div className={styles.useCasesTitle}>
            <div className={styles.title}>
              <div className="descriptor">Use cases</div>
              <h2>Tackle risk, not spreadsheets</h2>
              <p className="main-text">
                Automate what slows you down. Connect your processes and teams
                to simplify work, mitigate risks, and shift focus to strategic
                initiatives.
              </p>
            </div>
          </div>
          <div className={styles.useCasesPersons}>
            <div className={styles.useCasesPersona}>
              <h3>Compliance experts</h3>
              <div className={styles.photo}>
                <img src="/images/Home/UseCases/persona1.png" alt="" />
              </div>
              <div className={styles.group}>
                <p className="main-text">
                  Transparent compliance with integrated solutions, automated
                  risk management, and global verification.
                </p>
                <CircleButton
                  colorType={'secondary'}
                  text={'Made for compliance'}
                />
              </div>
            </div>
            <div className={styles.useCasesPersona}>
              <div className={styles.title}>
                <h3 className="text-white">Operations experts</h3>
                <p className="main-text black-7">
                  Boost operational efficiency, <br /> save time and costs, and
                  ensure <br /> proactive risk management
                </p>
              </div>
              <div className={styles.group}>
                <div className={styles.list}>
                  <a href="" className={clsx(styles.item, 'link-2 text-white')}>
                    Remove data silos with our unified risk framework
                  </a>
                  <a href="" className={clsx(styles.item, 'link-2 text-white')}>
                    Automate to cut costs and expedite decision-making
                  </a>
                  <a href="" className={clsx(styles.item, 'link-2 text-white')}>
                    Real-time collaboration for information sharing
                  </a>
                </div>

                <CircleButton
                  text={'Made for operations'}
                  colorType="secondary"
                />
              </div>
              <div className={styles.process}>
                <img src="/images/Home/UseCases/process.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
