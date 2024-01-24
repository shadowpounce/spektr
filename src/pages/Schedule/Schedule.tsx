import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/Context/MainContext'
import { ScheduleScreens } from '../../widgets/Screens/Schedule'

export const Schedule = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('schedule')
  }, [])

  return <>{ScheduleScreens.map((screen) => screen)}</>
}
