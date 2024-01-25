import { FC } from 'react'
import styles from './QuoteBlock.module.scss'

interface IProps {
  text: string
  author: string
  position: string
  logos: string[]
  photo: string
  previously?: boolean
}

export const QuoteBlock: FC<IProps> = ({
  text,
  author,
  position,
  logos,
  photo,
  previously = false,
}) => {
  return (
    <div className={styles.quoteBlock}>
      <div className={styles.quote}>
        <span className={styles.quoteElement}>
          <span>“</span> {text}
        </span>

        <div className={styles.bottom}>
          <div className={styles.info}>
            <p>{author}</p>
            <span className="link-2 font-normal black-6">{position}</span>
          </div>
          <div className={styles.logos}>
            {previously && 'Previously'}
            {logos.map((logo) => (
              <img src={logo} alt="" className={styles.logo} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.photo}>
        <img src={photo} alt="" />
      </div>
    </div>
  )
}
