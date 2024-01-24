import clsx from 'clsx'
import styles from './History.module.scss'

export const History = () => {
  return (
    <section className={clsx('section', styles.history)}>
      <div className={styles.historyContainer}>
        <div className={styles.historyTitle}>
          <div className="descriptor">History</div>
          <h2>The origins of spektr</h2>
        </div>
        <div className={styles.historyWrapper}>
          <div className={styles.historyBlocks}>
            <div className={styles.historyBlock}>
              <p className="link">Founded</p>
              <h4>2023</h4>
            </div>
            <div className={styles.historyBlock}>
              <p className="link">Seed round</p>
              <h4>$5M</h4>
            </div>
            <div className={styles.historyBlock}>
              <img
                src="/public/images/AboutUs/History/bg.png"
                alt=""
                className={styles.bg}
              />
              <p className="link">Nationalities</p>
              <h4>10+</h4>
            </div>
          </div>
          <div className={styles.historyText}>
            <p className="main-text">
              The spektr story begins in 2020 when our founders built HelloFlow,
              a no-code platform for client onboarding. Within less than two
              years, we gained global recognition and got acquired by Trulioo,
              the worldwide leader in identity verification.
              <br />
              <br /> Today, the original HelloFlow team is back and bigger than
              ever, ready to make waves once again. The decision to build spektr
              is our way of addressing the challenges we faced in managing the
              day-to-day demands of the financial industry. We offer a solution
              that (actually) works, redefining industry norms and proving its
              worth over time.
              <br />
              <br />
              <br />
              <h4>Making compliance better for you.</h4>
              <br />
              At spektr, our commitment is to simplify your life by offering a
              hassle-free approach to ongoing due diligence. In a nutshell,
              spektr automates 90% of risk and monitoring tasks, offering a
              faster, safer, and more budget-friendly alternative compared to
              traditional manual methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
