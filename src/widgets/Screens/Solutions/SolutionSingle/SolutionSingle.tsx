import styles from './SolutionSingle.module.scss'
import '../index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { solutions } from '../data'

export const SolutionSingle = () => {
  const { slug } = useParams()

  const [solution, setSolution] = useState<any>(undefined)

  useEffect(() => {
    if (slug) {
      const foundSolution = solutions.find(
        (sol) => sol.descriptor.toLowerCase() === slug.toLowerCase()
      )

      if (foundSolution) {
        setSolution(foundSolution)
      }
    }
  }, [slug])

  return (
    <section className={styles.solutionSingle}>
      <div className={styles.solutionSingleContainer}>
        {solution && (
          <>
            <div className="solutions-title">
              <div className="descriptor white">{solution.descriptor}</div>
              <h1>{solution.title}</h1>
            </div>
            {solution.items.map((item: any) => (
              <div className={styles.solutionSingleCard}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <img src={item} alt="" />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
}
