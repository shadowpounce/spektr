import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { SolutionScreens } from '../../widgets/Screens/Solutions'
import { useLocation, useParams } from 'react-router-dom'

export const Solution = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('solution')
  }, [])

  return <>{SolutionScreens.map((screen) => screen)}</>
}
