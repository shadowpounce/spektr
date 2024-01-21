import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { CareersScreens } from '../../widgets/Screens/Careers'

export const Careers = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('careers')
  }, [])

  return <>{CareersScreens.map((screen) => screen)}</>
}
