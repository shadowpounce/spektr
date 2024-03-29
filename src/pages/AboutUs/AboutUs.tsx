import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { AboutUsScreens } from '../../widgets/Screens/AboutUs'

export const AboutUs = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('about-us')
  }, [])

  return <>{AboutUsScreens.map((screen) => screen)}</>
}
