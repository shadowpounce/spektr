import clsx from 'clsx'
import styles from './styles.module.scss'
import { QuoteBlock } from '../../../entities/QuoteBlock/QuoteBlock'
import { personaTwoBlocks, personaTwoQuote } from './data'

export const Operations = () => {
  return (
    <section className={clsx('section', styles.persona)}>
      <div className={styles.personaContainer}>
        <div className={styles.personaWrapper}>
          <div className={styles.personaTitleRow}>
            <h2>Boost efficiency as you ensure compliance</h2>
            <p className="text-24">
              Cut costs and eliminate data silos through unified risk
              management. Don’t just meet but ensure continuous risk monitoring
              with feedback loops and a reliable single source of truth.
            </p>
          </div>
          <QuoteBlock {...personaTwoQuote} />
        </div>
        <div className={styles.personaBlocks}>
          {personaTwoBlocks.map((persona) => (
            <div className={styles.personaBlock}>
              <h3>{persona.title}</h3>
              <div className={styles.layout}>
                {persona.blocks.map((block) => (
                  <div className={styles.block}>
                    <div className={styles.graph}>
                      <img src={block.graph} alt="" />
                    </div>
                    <div className={styles.text}>
                      <p className={styles.title}>{block.title}</p>
                      <p className={styles.subtitle}>{block.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
