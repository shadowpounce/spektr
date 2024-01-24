import clsx from 'clsx'
import styles from './Quote.module.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const Quote = () => {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root.current,
        start: `top top+=75%`,
        end: `bottom bottom-=100%`,
        scrub: 0.1,
        animation: gsap
          .timeline()
          .to(document.body, {
            backgroundColor: '#1A1A1E',
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
    <section ref={root} className={clsx('section', styles.quote)}>
      <div className={styles.quoteContainer}>
        <div className={styles.quoteWrapper}>
          <div className="descriptor white">Trusted by others</div>
          <p className={styles.quoteElement}>
            “We are incredibly excited to partner with spektr. They are an
            exceptional team with a very clear product vision, and we believe
            they will be able to leverage their experience from HelloFlow to
            build spektr into a category-defining company within the compliance
            space.”
          </p>
          <div className={styles.quoteAuthor}>
            <img
              src="/public/images/AboutUs/Quote/photo.png"
              alt=""
              className={styles.photo}
            />
            <div className={styles.info}>
              <p className="link-2 gray">Maxine Rior</p>
              <p className="card-text black-7">
                Principal at <br /> Northzone
              </p>
            </div>
          </div>
        </div>
        <div className={styles.quoteInvestors}>
          <p className="link-2 black-7">Our investors</p>
          <div className={styles.logos}>
            <img
              src="/public/images/AboutUs/Quote/1.png"
              alt=""
              className={styles.logo}
            />
            <img
              src="/public/images/AboutUs/Quote/2.png"
              alt=""
              className={styles.logo}
            />
            <img
              src="/public/images/AboutUs/Quote/3.png"
              alt=""
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
