import React from 'react'
import './Home.css'
import Header from '../Header/Header'
const Home = (props) => {
  return (
    <div>
      <Header xxx={props.checkLogout}/>
      <h3 className='t1'>Welcome to Admin panel</h3>
    </div>
  )
}

export default Home
