import { FC, ReactNode, useContext, useEffect } from 'react'
import gsap from 'gsap'
import { MainContext } from './Context/MainContext'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

interface IProps {
  children: ReactNode
}

export const WithScrollSmoother: FC<IProps> = ({ children }) => {
  const { hash } = useContext(MainContext)

  useEffect(() => {
    if (hash !== '') {
      if (document.querySelector(hash)) {
        const querySection = document.querySelector<HTMLDivElement>(hash)

        if (querySection) {
          window.scrollTo({
            left: 0,
            top: querySection.offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }
  }, [hash])

  useEffect(() => {
    if (ScrollSmoother && window.innerWidth > 768) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: window.innerWidth > 768 ? 1.15 : 0.1,
      })
    }
  }, [])

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLDivElement>('.reveal')
    )
    const counters = Array.from(
      document.querySelectorAll<HTMLDivElement>('.counter')
    )
    const drawableElements = Array.from(
      document.querySelectorAll<SVGSVGElement>('.drawable')
    )

    drawableElements.map((el) => {
      ScrollTrigger.create({
        trigger: el.closest('.section'),
        start: el.dataset.start ?? `top top+=50%`,
        end: el.dataset.end ?? `bottom bottom-=75%`,
        scrub: 1,
        animation: gsap.to(el, {
          strokeDashoffset: 0,
          duration: el.dataset.duration ? el.dataset.duration : 3,
          ease: el.dataset.ease ?? 'ease',
          delay: el.dataset.delay ? Number(el.dataset.delay) : 0,
        }),
      })
    })

    counters.map((counter) => {
      ScrollTrigger.create({
        trigger: counter,
        start: counter.dataset.start ?? `top top+=75%`,
        onEnter: () => {
          gsap.fromTo(
            counter,
            {
              textContent: 0,
              duration: 2,
              ease: 'ease',
              snap: { textContent: 1 },
              stagger: 1,
            },
            {
              textContent: counter.dataset.end,
              duration: 2,
              ease: 'ease',
              snap: { textContent: 1 },
              stagger: 1,
            }
          )
        },
      })
    })

    revealElements.map((item) => {
      item.dataset.toReveal = 'true'

      if (!item.dataset.pin) {
        ScrollTrigger.create({
          trigger: item.dataset.trigger
            ? item.closest(item.dataset.trigger)
            : item,
          start: item.dataset.start ?? `top top+=75%`,
          onEnter: () =>
            gsap.to(item, {
              opacity: 1,
              rotate: 0,
              scale: 1,
              xPercent: 0,
              yPercent: 0,
              y: 0,
              x: 0,
              z: 0,
              duration: item.dataset.duration ? item.dataset.duration : 0.5,
              ease: item.dataset.ease ?? 'ease',
              delay: item.dataset.delay ? Number(item.dataset.delay) : 0,
            }),
        })
      }
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
