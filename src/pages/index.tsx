import { IPage } from '../interfaces'
import { Integrations } from '../widgets/Screens/Integrations/Integrations/Integrations'
import { AboutUs } from './AboutUs/AboutUs'
import { Blog } from './Blog/Blog'
import { Careers } from './Careers/Careers'
import { ContactUs } from './ContactUs/ContactUs'
import { Home } from './Home/Home'
import { PersonaOne } from './Persona/PersonaOne'
import { PersonaTwo } from './Persona/PersonaTwo'
import { Schedule } from './Schedule/Schedule'
import { Solution } from './Solution/Solution'
import { Solutions } from './Solutions/Solutions'

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
  {
    title: 'About Us',
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    title: 'Schedule',
    path: '/schedule',
    element: <Schedule />,
  },
  {
    title: 'Integrations',
    path: '/integrations',
    element: <Integrations />,
  },
  {
    title: 'Solutions',
    path: '/solutions',
    element: <Solutions />,
  },
  {
    title: 'Solution',
    path: '/solutions/:slug',
    element: <Solution />,
  },
  {
    title: 'Blog',
    path: '/blog',
    element: <Blog />,
  },
  {
    title: 'Persona One',
    path: '/compliance',
    element: <PersonaOne />,
  },
  {
    title: 'PersonaTwo',
    path: '/operations',
    element: <PersonaTwo />,
  },
]
