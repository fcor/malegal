import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () =>
  <div>
    <NavLink
      to='/'
      >
      Nosotros
    </NavLink>
    <NavLink
      to='/areas'
      >
      Áreas de práctica
    </NavLink>
    <NavLink
      to='/equipo'
      >
      Equipo
    </NavLink>
    <NavLink
      to='/trabajo'
      >
      Trabaje con nosotros
    </NavLink>
  </div>


export default Navbar
