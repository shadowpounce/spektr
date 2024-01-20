import clsx from 'clsx'
import styles from './Blog.module.scss'
import { blogCards } from './data'
import { BlogCard } from '../../../../entities/BlogCard/BlogCard'
import { BookDemoBanner } from '../../../../shared/BookDemoBanner/BookDemoBanner'

export const Blog = () => {
  return (
    <section className={clsx('section', styles.blog)}>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div className={styles.blogTitle}>
            <div className="descriptor white">Blog</div>
            <h2>Spektr updates</h2>
          </div>
          <div className={styles.blogCards}>
            {blogCards.map((card, idx) => (
              <BlogCard {...card} idx={idx} />
            ))}
          </div>
        </div>
        <BookDemoBanner />
      </div>
    </section>
  )
}
