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
              We’ve done it <br /> before
            </h2>
          </div>
          <div className={styles.trustContent}>
            <div className={styles.trustInvestors}>
              <div className={styles.card}>
                <div className={styles.cardBg}>
                  <svg
                    width="436"
                    height="345"
                    viewBox="0 0 436 345"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_872_819)">
                      <rect width="436" height="345" fill="#2C2C30" />
                      <path
                        opacity="0.56"
                        d="M0 76.0795H436M0 137.933H436M0 199.787H436M0 261.641H436M0 323.495H436M369.763 15V392M308.116 15L308.116 392M246.482 15L246.482 392M184.835 15L184.835 392M123.188 15L123.188 392M61.5479 15V392"
                        stroke="url(#paint0_radial_872_819)"
                        stroke-opacity="0.63"
                      />
                      <circle cx="218" cy="317" r="225" fill="#2BBEAF" />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_872_819"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(218.517 190.83) rotate(90) scale(209.962 242.82)"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </radialGradient>
                      <clipPath id="clip0_872_819">
                        <rect width="436" height="345" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="descriptor dark">Our investors</div>
              </div>
              <div className={styles.label}>
                <a href="" className={clsx(styles.row, 'link-2')}>
                  ISO 27001:2022
                  <div className="link-icon"></div>
                </a>
                <p className="card-text">
                  We are ISO® certificate holders that means our company
                  internationally standardised.
                </p>
              </div>
            </div>
            <div className={styles.trustTextBlocks}>
              <div className={styles.blocks}>
                {trustTexts.map((t) => (
                  <div className={styles.trustTextBlock}>
                    <h4>{t.title}</h4>
                    <div className={styles.texts}>
                      {t.texts.map((text) => text)}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.fade}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
