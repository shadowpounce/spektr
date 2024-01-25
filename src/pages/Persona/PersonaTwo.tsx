import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { PersonaTwoScreens } from '../../widgets/Screens/Persona'

export const PersonaTwo = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('persona-one')
  }, [])

  return <>{PersonaTwoScreens.map((screen) => screen)}</>
}
