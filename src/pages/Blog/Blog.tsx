import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { BlogScreens } from '../../widgets/Screens/Blog'

export const Blog = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('blog')
  }, [])

  return <>{BlogScreens.map((screen) => screen)}</>
}
