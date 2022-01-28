import styles from './Layout.module.css'

import {Link, Outlet} from "react-router-dom"

import SearchForm from "../../components/SearchForm/SearchForm"


function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link className={styles.link} to={'/'}>
          <h3 className={styles.title}>Bookshelf</h3>
        </Link>
        <SearchForm/>
      </header>
      <main className={styles.content}>
        <Outlet/>
      </main>
      <footer className={styles.footer}/>
    </div>
  )
}

export default Layout
