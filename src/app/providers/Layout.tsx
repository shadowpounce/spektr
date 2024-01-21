import { FC, ReactNode, useState } from 'react'
import { MainContext } from './Context/MainContext'
import { useLocation } from 'react-router-dom'
import { Header } from '../../widgets/Header/Header'
import { WithScrollSmoother } from './WithScrollSmoother'
import { Footer } from '../../widgets/Footer/Footer'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  const [hash, setHash] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<string>('')

  const [menuActive, setMenuActive] = useState<boolean>(false)

  const location = useLocation()

  if (location.hash && hash === '') {
    setHash(location.hash)
  }

  return (
    <MainContext.Provider
      value={{
        menuActive,
        setMenuActive,
        currentPage,
        setCurrentPage,
        hash,
        setHash,
      }}
    >
      <Header />
      <WithScrollSmoother>
        {children}
        <Footer />
      </WithScrollSmoother>
    </MainContext.Provider>
  )
}
