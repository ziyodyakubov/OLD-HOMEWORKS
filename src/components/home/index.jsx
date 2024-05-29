import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className='container d-flex gap-4 nmagap'>
      <Link to="/">Home</Link>
      <Link to="/first">First task</Link>
      <Link to="/second">Second task</Link>
      <Link to="/third">Third task</Link>

      <Link to="/old">EEENG OLD</Link>
    </div>
  )
}

export default Home
