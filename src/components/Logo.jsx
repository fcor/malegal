import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Logo = () =>
  <NavLink
    exact
    to='/'
    >
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
  </NavLink>

export default Logo
