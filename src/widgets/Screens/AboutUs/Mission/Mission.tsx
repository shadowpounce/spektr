import clsx from 'clsx'
import styles from './Mission.module.scss'

export const Mission = () => {
  return (
    <section className={clsx('section', styles.mission)}>
      <div className={styles.missionContainer}>
        <div className={styles.missionWrapper}>
          <div className={styles.missionColumn}>
            <div className={styles.missionTitle}>
              <div className="descriptor white">About us</div>
              <h1>
                Your all-in-one <br />
                compliance hub
              </h1>
            </div>
            <p className="main-text">
              Born in 2023, spektr came to life after our team built a no-code
              onboarding platform. We noticed that lots of people see compliance
              as a barrier to innovation. Our <b>mission</b> is to shift that
              mindset and prove that compliance is a driver for business growth.
              At spektr, we're all about making processes simple and transparent
              for everyone – no coding required.
            </p>
          </div>
          <div className={styles.missionTeam}>
            <img src="/public/images/AboutUs/Mission/team.png" alt="" />
          </div>
        </div>
        <div className={styles.group}>
          <p className="black-7 link-2 font-normal">
            Our team includes financial leaders from
          </p>
          <div className={styles.logos}>
            <img src="/public/images/AboutUs/Mission/Citi logo.svg" alt="" />
            <img src="/public/images/AboutUs/Mission/Google logo.svg" alt="" />
            <img src="/public/images/AboutUs/Mission/Group 2269.svg" alt="" />
            <img src="/public/images/AboutUs/Mission/Meta logo.svg" alt="" />
            <img src="/public/images/AboutUs/Mission/Vector.svg" alt="" />
            <img src="/public/images/AboutUs/Mission/layer1.svg" alt="" />
            <img
              src="/public/images/AboutUs/Mission/robinhood logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
