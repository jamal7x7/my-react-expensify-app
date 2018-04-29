import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
  <header >
    <h1 className='title' >Expensify°</h1>
    <div className='navWrapper' >
      <div className='nav'>
        <NavLink className='navLink' activeClassName='is-active' to="/" exact={true}>  Dashboard  </NavLink>
        <NavLink className='navLink' activeClassName='is-active' to="/create">  Create  </NavLink>
        <NavLink className='navLink' activeClassName='is-active' to="/edit">  Edit  </NavLink>
        <NavLink className='navLink' activeClassName='is-active' to="/help">  Help  </NavLink>
      </div>
    </div>

  </header >
)

export default Header
