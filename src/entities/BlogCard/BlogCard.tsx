import { FC } from 'react'
import styles from './BlogCard.module.scss'
import clsx from 'clsx'

interface IProps {
  idx: number
  thumbnail: string
  title: string
  date: string
  category: string
}

export const BlogCard: FC<IProps> = ({
  idx,
  thumbnail,
  title,
  date,
  category,
}) => {
  return (
    <div className={styles.blogCard}>
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
    </div>
  )
}
