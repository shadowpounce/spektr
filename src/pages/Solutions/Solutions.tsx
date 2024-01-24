import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { SolutionsScreens } from '../../widgets/Screens/Solutions'

export const Solutions = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('solutions')
  }, [])

  return <>{SolutionsScreens.map((screen) => screen)}</>
}
