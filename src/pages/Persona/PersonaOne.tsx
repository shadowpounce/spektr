import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { PersonaOneScreens } from '../../widgets/Screens/Persona'

export const PersonaOne = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('persona-one')
  }, [])

  return <>{PersonaOneScreens.map((screen) => screen)}</>
}
