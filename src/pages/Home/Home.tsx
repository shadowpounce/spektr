import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { HomeScreens } from '../../widgets/Screens/Home'

export const Home = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('home')
  }, [])

  return <>{HomeScreens.map((screen) => screen)}</>
}
