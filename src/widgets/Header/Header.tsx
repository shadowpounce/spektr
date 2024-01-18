import { navLinks } from '../../data'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header id="header" className={styles.header}>
      {/* logo */}
      <a href="/" className={styles.headerLogo}>
        <Logo />
      </a>
      {/* nav */}
      <nav className={styles.headerNav}>
        {navLinks.map((link) => (
          <a className={styles.headerNavLink} href={link.url}>
            {link.title}
          </a>
        ))}
      </nav>
      {/* buttons */}
      <div className={styles.headerButtons}>
        <a href="" className="button primary">
          Sign In
        </a>
        <a href="" className="button secondary">
          Talk to us
        </a>
      </div>
    </header>
  )
}
