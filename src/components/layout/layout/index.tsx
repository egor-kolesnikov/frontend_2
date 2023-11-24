import styles from './layout.module.scss'
import { Inter } from 'next/font/google'
import Header from '../header'
import { ReactNode } from 'react'
import Footer from '../footer'

const inter = Inter({ subsets: ['latin'] })

type TProps = {
  children: ReactNode
}

export default function Layout({ children }: TProps) {
  return (
    <div className={`${inter.className} ${styles.layout}`}>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
    </div>
  )
}
