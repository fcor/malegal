import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navbar = ({ variant }) =>
  <div className={`navbar row container ${variant}`}>
    <Logo />
    <div className="menu row">
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
  </div>

Navbar.propTypes = {
  variant: PropTypes.string,
}

Navbar.defaultProps = {
  variant: 'classic'
}

export default Navbar
