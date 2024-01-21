import { IPage } from '../interfaces'
import { Careers } from './Careers/Careers'
import { ContactUs } from './ContactUs/ContactUs'
import { Home } from './Home/Home'

export const pages: IPage[] = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Careers',
    path: '/careers',
    element: <Careers />,
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    element: <ContactUs />,
  },
]
