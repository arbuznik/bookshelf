import styles from './Home.module.scss'

import SearchForm from "../../components/SearchForm/SearchForm"

function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.header}>
        <h1 className={styles.title}>Bookshelf</h1>
        <SearchForm/>
      </main>
    </div>
  )
}

export default Home