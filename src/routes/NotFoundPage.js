function NotFoundPage() {
  return (
    <div className="app__not-found">
      <img src={require("../images/not-found-cat.png")}
  alt="Page not found" className="app__not-found-image"/>
      <div className="app__not-found-content">
        <h1 className="app__not-found-title">404</h1>
        <p className="app__not-found-description">Sorry, no such page, try searching for something else.</p>
      </div>
    </div>
  )
}

export default NotFoundPage