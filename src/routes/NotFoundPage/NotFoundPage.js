import styles from "./NotFoundPage.module.scss"

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <img src={require("../../images/not-found-cat.png")}
           alt="Page not found"
           className={styles.image}/>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>Sorry, no such page, try searching for something else.</p>
      </div>
    </div>
  )
}

export default NotFoundPage