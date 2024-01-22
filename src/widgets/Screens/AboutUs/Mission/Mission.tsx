import clsx from 'clsx'
import styles from './Mission.module.scss'

export const Mission = () => {
  return (
    <section className={clsx('section', styles.mission)}>
      <div className={styles.missionContainer}>
        <div className={styles.missionTitle}>
          <div className="descriptor white">About us</div>
          <h1>
            The all-in-one compliance <br /> platform for financial <br />{' '}
            companies
          </h1>
        </div>
        <div className={styles.missionWrapper}>
          <div className={styles.missionColumn}>
            <p className="main-text">
              We're a team that spent years building simple, easy-to-use,
              solutions to complex problems. <br />
              <br /> At the core of <b>spektr's mission</b> is bridging the gap
              between due diligence and automation for a more secure and
              informed journey both for you and your clients.
            </p>
            <div className={styles.group}>
              <p className="black-7">
                Our team includes financial leaders from
              </p>
              <div className={styles.logos}>
                <img
                  src="/public/images/AboutUs/Mission/Citi logo.svg"
                  alt=""
                />
                <img
                  src="/public/images/AboutUs/Mission/Google logo.svg"
                  alt=""
                />
                <img
                  src="/public/images/AboutUs/Mission/Group 2269.svg"
                  alt=""
                />
                <img
                  src="/public/images/AboutUs/Mission/Meta logo.svg"
                  alt=""
                />
                <img src="/public/images/AboutUs/Mission/Vector.svg" alt="" />
                <img src="/public/images/AboutUs/Mission/layer1.svg" alt="" />
                <img
                  src="/public/images/AboutUs/Mission/robinhood logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.missionTeam}>
            <img src="/public/images/AboutUs/Mission/team.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
