import clsx from "clsx";
import styles from "./ScreenCast.module.scss";
import { steps } from "./data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GsapMagnetic } from "../../../../shared/GsapMagnetic/GsapMagnetic";

export const ScreenCast = () => {
  const root = useRef<HTMLDivElement>(null);
  const rootContainer = useRef<HTMLDivElement>(null);

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
            backgroundColor: "#27272C",
          })
          .to(
            "#header",
            {
              backgroundColor: "#f7f7f8",
            },
            0
          )
          .to(
            rootContainer.current,
            {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            0
          )
          .to(
            document.body,
            {
              backgroundColor: "#f7f7f8",
            },
            1
          )
          .to(
            "#header",
            {
              backgroundColor: "transparent",
            },
            1
          )
          .to(
            rootContainer.current,
            {
              opacity: 0,
              yPercent: -25,
              scale: 0.8,
            },
            1
          ),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={clsx("section", styles.screenCast)}>
      <div ref={rootContainer} className={styles.screenCastContainer}>
        <GsapMagnetic>
          <button className="button primary-rounded">Journey</button>
        </GsapMagnetic>
        <div className={styles.screenCastVideo}>
          <img src="/images/Home/ScreenCast/video-preview.png" alt="" />

          <div className={styles.screenCastSteps}>
            <div className={styles.steps}>
              {steps.map((step, idx) => {
                if (idx !== steps.length - 1) {
                  return (
                    <>
                      <div className={styles.step}>
                        <div className={styles.icon}>
                          <img src={step.icon} alt="" />
                        </div>
                        <p>{step.title}</p>
                      </div>
                      <div className={styles.devider}></div>
                    </>
                  );
                } else {
                  return (
                    <div className={styles.step}>
                      <div className={styles.icon}>
                        <img src={step.icon} alt="" />
                      </div>
                      <p>{step.title}</p>
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.progressBars}>
              <div className={styles.progressBar}>
                <div></div>
              </div>
              <div className={styles.progressBar}>
                <div></div>
              </div>
              <div className={styles.progressBar}>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
