// Write your JS code here

import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1>Home Route</h1>
      <br />
      <LogoutButton />
    </div>
  </div>
)

export default Home
