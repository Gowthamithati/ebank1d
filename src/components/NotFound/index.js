import {Link, withRouter} from 'react-router-dom'

import './index.css'

const NotFound = props => {
  const onClickBackToHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
        className="image"
      />
      <h1 className="heading">Page Not Found</h1>
      <p className="description">
        we are sorry, the page you requested could not be found, please go back
        to the homepage
      </p>
      <Link to="/">
        <button type="button" className="button" onClick={onClickBackToHome}>
          Go Back to Home
        </button>
      </Link>
    </div>
  )
}
export default withRouter(NotFound)
