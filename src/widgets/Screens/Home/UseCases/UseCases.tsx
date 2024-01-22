import clsx from "clsx";
import styles from "./UseCases.module.scss";
import { CircleButton } from "../../../../shared/CircleButton/CircleButton";

export const UseCases = () => {
  return (
    <section className={clsx("section", styles.useCases)}>
      <div className={styles.useCasesContainer}>
        <div className={styles.useCasesWrapper}>
          <div className={styles.useCasesTitle}>
            <div className={styles.title}>
              <div className="descriptor">Use cases</div>
              <h2>Unlock the growth</h2>
              <p className="main-text">
                Lorem ipsum dolor sit amet consectetur. <br /> Quam enim nulla
                commodo mi.
              </p>
            </div>
            <CircleButton text={"Read more"} />
          </div>
          <div className={styles.useCasesPersons}>
            <div className={styles.useCasesPersona}>
              <h3>
                Use case <br /> Persona 1
              </h3>
              <div className={styles.svg}>
                <svg
                  preserveAspectRatio="none"
                  width="261"
                  height="147"
                  viewBox="0 0 261 147"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    width="251.599"
                    height="65.3521"
                    rx="32.676"
                    transform="matrix(0.939693 -0.34202 -0.367995 -0.929828 24.0488 146.818)"
                    fill="url(#paint0_linear_872_788)"
                  />
                  <circle
                    cx="32.676"
                    cy="32.676"
                    r="32.676"
                    transform="matrix(1 -5.04068e-09 -0.0277823 -0.999614 6.82422 139.61)"
                    fill="#2BBEAF"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_872_788"
                      x1="24.6012"
                      y1="24.7454"
                      x2="291.658"
                      y2="12.675"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2BBEAF" />
                      <stop offset="0.379009" stop-color="#2BBEAF" />
                      <stop
                        offset="1"
                        stop-color="#2BBEAF"
                        stop-opacity="0.29"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.group}>
                <p className="main-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <CircleButton
                  colorType={"secondary"}
                  text={"Read more about case "}
                />
              </div>
            </div>
            <div className={styles.useCasesPersona}>
              <div className={styles.title}>
                <h3 className="text-white">Use case Persona 2</h3>
                <p className="main-text black-7">
                  Lorem ipsum dolor sit amet <br /> consectetur.
                </p>
              </div>
              <div className={styles.group}>
                <div className={styles.list}>
                  <a href="" className={clsx(styles.item, "link-2 text-white")}>
                    Lorem ipsum dolor sit.
                  </a>
                  <a href="" className={clsx(styles.item, "link-2 text-white")}>
                    Lorem ipsum dolor sit.
                  </a>
                  <a href="" className={clsx(styles.item, "link-2 text-white")}>
                    Lorem ipsum dolor sit.
                  </a>
                </div>

                <CircleButton
                  text={"Read more about case "}
                  colorType="secondary"
                />
              </div>
              <div className={styles.process}>
                <img src="/images/Home/UseCases/process.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
