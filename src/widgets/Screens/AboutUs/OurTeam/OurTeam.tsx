import clsx from 'clsx'
import styles from './OurTeam.module.scss'
import { ourTeamCards } from './data'
import { MemberCard } from '../../../../entities/MemberCard/MemberCard'

export const OurTeam = () => {
  return (
    <section className={clsx('section', styles.ourTeam)}>
      <div className={styles.ourTeamContainer}>
        <div className={styles.ourTeamWrapper}>
          <div className={styles.ourTeamTitle}>
            <div className="descriptor">Our team</div>
            <h2>
              We’ve also been <br /> there, a lot.
            </h2>
          </div>
          <p className="main-text text-black">
            With a background in banking and payments, we've faced compliance
            challenges firsthand. Our clear goal at spektr is to create an
            insanely good platform that drives meaningful change. <br /> <br />{' '}
            Curious to meet the minds behind spektr? Connect with us on
            LinkedIn!
          </p>
        </div>

        <div className={styles.ourTeamMembers}>
          {ourTeamCards.map((card, idx) => (
            <MemberCard idx={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
