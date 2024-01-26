import clsx from 'clsx'
import styles from './Integrations.module.scss'
import { integrationsCards } from './data'

export const Integrations = () => {
  return (
    <section className={clsx('section', styles.integrations)}>
      <div className={styles.integrationsHead}>
        <div className={styles.integrationsTitle}>
          <div className="descriptor white">Integrations</div>
          <h2>Explore all possible integrations</h2>
        </div>
        <div className={styles.integrationsSearch}>
          <img
            src="/images/icons/search.svg"
            alt=""
            className={styles.integrationsSearchIcon}
          />
          <input
            className="link black-7"
            placeholder="Search for integrations..."
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className={styles.integrationsBody}>
        <div className={styles.filter}>
          <button className="button secondary">Lorem ipsum</button>
          <button className="button primary">Lorem ipsum</button>
          <button className="button primary">Lorem ipsum</button>
        </div>
        <div className={styles.blocks}>
          {integrationsCards.map((card) => (
            <div className={styles.block}>
              <div className={styles.head}>
                <div className={styles.icon}>
                  <img src={card.icon} alt="" />
                </div>
                <p className={styles.title}>{card.name}</p>
              </div>
              <p className="card-text">{card.text}</p>
              {/* <div className={styles.arrow}>
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5173 1L16 6M16 6L11.5173 11M16 6L1 6"
                    stroke="#0B0B0E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
