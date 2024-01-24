import { FC } from 'react'
import styles from './MemberCard.module.scss'

interface IProps {
  idx: number
  photo: string
  name: string
  position: string
}

export const MemberCard: FC<IProps> = ({ idx, photo, name, position }) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.photo}>
        <div className={styles.photoImage}>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className={styles.info}>
        <p className="link-2 black">{name}</p>
        <p className="card-text black-4">{position}</p>
      </div>
    </div>
  )
}
