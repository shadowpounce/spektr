import clsx from 'clsx'
import styles from './Trust.module.scss'
import { trustTexts } from './data'

export const Trust = () => {
  return (
    <section className={clsx('section', styles.trust)}>
      <div className={styles.trustContainer}>
        <div className={styles.trustWrapper}>
          <div className={styles.trustTitle}>
            <div className="descriptor white">About us</div>
            <h2>
              Redefining <br /> compliance, again
            </h2>
          </div>
          <div className={styles.trustContent}>
            <div className={styles.smoke}></div>
            <div className={styles.trustItem}>
              <div className={styles.block}>
                <div className={styles.row}>
                  <span className="text-12 font-bold leading-[150%] text-black">
                    2020
                  </span>
                  <div className={styles.rect}>Founded HelloFlow</div>
                </div>
                <div className={styles.row}>
                  <div></div>
                  <div className={styles.graph}>
                    <img src="/images/Home/Trust/graph1.svg" alt="" />
                  </div>
                </div>
                <div className={styles.row}>
                  <span className="text-12 font-bold leading-[150%] text-black">
                    2021
                  </span>
                  <div className={styles.rect}>Acquired by Trulioo</div>
                </div>
              </div>
              <div className={styles.text}>
                <h4>Our team has come a long way.</h4>
                <p className="main-text">
                  The spektr journey began a few years ago when our founders
                  created HelloFlow, a no-code platform for client onboarding.
                  It gained global recognition and was later acquired by the
                  leader in global identity verification,{' '}
                  <b className="text-[#2BBEAF]">Trulioo.</b>
                </p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.block}>
                <div className={styles.row}>
                  <span className="text-12 font-bold leading-[150%] text-black">
                    2023
                  </span>
                  <div className={styles.rect}>Founded spektr</div>
                </div>
                <div className={styles.row}>
                  <div></div>
                  <div className={styles.graph}>
                    <img src="/images/Home/Trust/graph2.svg" alt="" />
                  </div>
                </div>
                <div className={styles.row}>
                  <span></span>
                  <div className={styles.rect}>Secured $4M investment</div>
                </div>
              </div>
              <div className={styles.text}>
                <h4>Making compliance a better business.</h4>
                <p className="main-text">
                  Back in action at spektr, the original HelloFlow team is set
                  to redefine the industry. Coming from diverse finance
                  backgrounds, we understand the industry's growing challenges.
                  That's why we're building a solution that transforms due
                  diligence into a revenue-generating tool tailored to your
                  business needs. <br />
                  <br /> Let us handle your risk and monitoring tasks, offering
                  a faster, safer, and budget-friendly alternative to
                  traditional manual approaches
                </p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.block}>
                <div className={styles.row}>
                  <span className="text-12 font-bold leading-[150%] text-black">
                    2024
                  </span>
                  <div className={styles.rect}>Launched spektr.com 🚀</div>
                </div>
              </div>
              <div className={styles.text}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
