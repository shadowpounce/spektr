import clsx from 'clsx'
import styles from './styles.module.scss'
import { QuoteBlock } from '../../../entities/QuoteBlock/QuoteBlock'
import { personaOneBlocks, personaOneQuote } from './data'

export const Compliance = () => {
  return (
    <section className={clsx('section', styles.persona)}>
      <div className={styles.personaContainer}>
        <div className={styles.personaWrapper}>
          <div className={styles.personaTitleRow}>
            <h2>Compliance and monitoring, without interruption</h2>
            <p className="text-24">
              Spektr integrates with your systems, ensuring controls meet
              security standards like ISO 27001. Make compliance your default
              state with risk monitoring, evidence collection, and automatic
              issue resolution.
            </p>
          </div>
          <QuoteBlock {...personaOneQuote} />
        </div>
        <div className={styles.personaBlocks}>
          {personaOneBlocks.map((persona) => (
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
