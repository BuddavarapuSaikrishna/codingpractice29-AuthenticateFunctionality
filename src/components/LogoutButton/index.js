// Write your JS code here

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogoutBtn = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={onClickLogoutBtn}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
