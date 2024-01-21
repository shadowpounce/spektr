import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { ContactUsScreens } from '../../widgets/Screens/ContactUs'

export const ContactUs = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('contact-us')
  }, [])

  return <>{ContactUsScreens.map((screen) => screen)}</>
}
