// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  SubmitData = async () => {
    const url = 'https://apis.ccbp.in/login'
    const UserDetails = {username: 'rahul', password: 'rahul@2021'}
    const option = {
      method: 'Post',

      body: JSON.stringify(UserDetails),
    }

    const response = await fetch(url, option)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <br />
        <button type="button" onClick={this.SubmitData}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
