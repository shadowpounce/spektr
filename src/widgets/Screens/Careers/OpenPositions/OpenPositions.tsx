import clsx from 'clsx'
import styles from './OpenPositions.module.scss'
import { BookDemoBanner } from '../../../../shared/BookDemoBanner/BookDemoBanner'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const OpenPositions = () => {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root.current,
        start: `top top+=75%`,
        end: `bottom bottom-=125%`,
        scrub: 0.1,
        animation: gsap
          .timeline()
          .to(document.body, {
            backgroundColor: '#1a1a1e',
          })
          .to(
            '#header',
            {
              backgroundColor: '#f7f7f8',
            },
            0
          )

          .to(
            document.body,
            {
              backgroundColor: '#f7f7f8',
            },
            1
          )
          .to(
            '#header',
            {
              backgroundColor: 'transparent',
            },
            1
          ),
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={root} className={clsx('section', styles.openPositions)}>
        <div className={styles.openPositionsContainer}>
          <div className={styles.openPositionsWrapper}>
            <div className={styles.openPositionsTitle}>
              <h2 className="text-white">
                Open roles — <br /> join the spektr 🚀 team!
              </h2>
            </div>
            <div className={styles.openPositionsFiltering}>
              <div className={styles.filter}>
                <div className={styles.filterHead}>
                  <p className="link-2 black-5">All departments</p>
                  <img src="/images/icons/filter-white-arrow.svg" alt="" />
                </div>
              </div>
              <div className={styles.listResults}>
                <div className={styles.listItem}>
                  <span className="link-2 black-7">Engineering</span>
                  <div className={styles.row}>
                    <h4 className="text-white">Data Engineer</h4>
                    <div className={styles.tags}>
                      <div className="descriptor dark bgc-black-2">
                        <img src="/images/icons/location.svg" alt="" />
                        Copenhagen
                      </div>
                      <div className="descriptor dark bgc-black-2">
                        <img src="/images/icons/calendar.svg" alt="" />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <h4 className="text-white">Backend Engineer</h4>
                    <div className={styles.tags}>
                      <div className="descriptor dark bgc-black-2">
                        <img src="/images/icons/location.svg" alt="" />
                        Copenhagen
                      </div>
                      <div className="descriptor dark bgc-black-2">
                        <img src="/images/icons/calendar.svg" alt="" />
                        Full-time
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className="link-2 black-7">Engineering</span>
                  <div className={styles.row}>
                    <h4 className="text-white">Senior Data Analyst</h4>
                    <div className={styles.tags}>
                      <div className="descriptor dark bgc-black-2">
                        <img src="/images/icons/location.svg" alt="" />
                        Copenhagen
                      </div>
                      <div className="descriptor dark bgc-black-2">
                        <img src="/images/icons/calendar.svg" alt="" />
                        Full-time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
