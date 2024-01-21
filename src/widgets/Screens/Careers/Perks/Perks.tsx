import clsx from 'clsx'
import styles from './Perks.module.scss'
import { perksBlocks } from './data'

export const Perks = () => {
  return (
    <section className={clsx('section', styles.perks)}>
      <div className={styles.perksContainer}>
        <div className={styles.perksWrapper}>
          <div className={styles.perksTitleRow}>
            <div className={styles.perksTitle}>
              <div className="descriptor white">Perks & benefits</div>
              <h2>
                Wide spectre <br /> of benefits
              </h2>
            </div>
            <div className={styles.perksDescription}>
              <p className="main-text">
                Seven nationalities, and counting. <br /> Working from
                Copenhagen and <br /> Romania.
              </p>
            </div>
          </div>
          <div className={styles.perksBlocks}>
            {perksBlocks.map((block) => (
              <div className={styles.perksBlock}>
                <div
                  style={{
                    backgroundColor: block.iconColor,
                  }}
                  className={styles.icon}
                >
                  <img src={block.icon} alt="" />
                </div>
                <div className={styles.content}>
                  <p className={styles.title}>{block.title}</p>
                  <p className="card-text black-5">{block.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
