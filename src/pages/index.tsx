import { IPage } from '../interfaces'
import { Home } from './Home/Home'

export const pages: IPage[] = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
  },
]
