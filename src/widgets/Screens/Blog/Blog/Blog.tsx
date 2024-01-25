import clsx from 'clsx'
import styles from './Blog.module.scss'
import { BlogCard } from '../../../../entities/BlogCard/BlogCard'
import { useState } from 'react'
import { blogCards } from '../../Home/Blog/data'

export const Blog = () => {
  const [latestPost, setLatestPost] = useState<any>(blogCards[0])
  const [postsPerPage, setPostsPerPage] = useState<number>(7)

  function loadMore() {
    setPostsPerPage(postsPerPage + 7)
  }

  return (
    <section className={clsx('section', styles.blog)}>
      <div className={styles.blogContainer}>
        <div className={styles.blogWelcome}>
          <div className={styles.blogTitle}>
            <div className="descriptor white">Blog</div>
            <h1>Insights and trends shaping the future of compiliance</h1>
            <p className={clsx('text-20', styles.blogSubtitle)}>
              Latests updates on our product and other insights.
            </p>
          </div>
          <div className={styles.blogLatestPost}>
            <p className="link-2 black-7">Latest post</p>
            <BlogCard cardType="big" idx={0} {...latestPost} />
          </div>
        </div>
        <div className={styles.blogPosts}>
          <div className={styles.blogFilter}>
            <button className="button-filter active">All posts</button>
            <button className="button-filter">Compliance</button>
            <button className="button-filter">Product</button>
            <button className="button-filter">Finance</button>
            <button className="button-filter">Press Release</button>
          </div>
          <div className={styles.posts}>
            {blogCards
              .slice(0, postsPerPage)
              .map((card, idx) =>
                (idx + 1) % 4 === 0 ? (
                  <BlogCard idx={idx} cardType="big" {...card} />
                ) : (
                  <BlogCard idx={idx} {...card} />
                )
              )}
          </div>
          {postsPerPage < blogCards.length && (
            <p
              onClick={() => loadMore()}
              className={clsx('link-2 black-2 underline', styles.blogLoadMore)}
            >
              Load more
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
