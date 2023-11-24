import styles from './header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header__container}`}>
        <Link className={`${styles.header__link}`} href={'/?page=1'}>
          All Posts
        </Link>
      </div>
    </header>
  )
}
