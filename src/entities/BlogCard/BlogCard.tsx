import { FC } from 'react'
import styles from './BlogCard.module.scss'
import clsx from 'clsx'
import { CircleButton } from '../../shared/CircleButton/CircleButton'

interface IProps {
  idx: number
  thumbnail: string
  title: string
  text: string
  date: string
  category: string
  cardType?: 'common' | 'big'
}

export const BlogCard: FC<IProps> = ({
  idx,
  text,
  thumbnail,
  title,
  date,
  category,
  cardType = 'common',
}) => {
  return (
    <div className={clsx(styles.blogCard, cardType === 'big' && styles.big)}>
      {cardType === 'common' ? (
        <>
          <div className={styles.thumbnail}>
            <img src={thumbnail} alt="" />
          </div>
          <a href="" className={clsx(styles.infoRow, 'link')}>
            <div className={styles.category}>{category}</div>
            <span className={styles.date}>{date}</span>
          </a>
          <a href="" className={styles.title}>
            {title}
          </a>
        </>
      ) : (
        <>
          <div className={styles.thumbnail}>
            <img src={thumbnail} alt="" />
          </div>
          <div className={styles.column}>
            <a href="" className={clsx(styles.infoRow, 'link')}>
              <div className={styles.category}>{category}</div>
              <span className={styles.date}>{date}</span>
            </a>
            <h3>{title}</h3>
            <p className="card-text black-4">{text}</p>
            <CircleButton magnetic={false} text="Read full article" />
          </div>
        </>
      )}
    </div>
  )
}
