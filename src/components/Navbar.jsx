import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navbar = ({ variant }) =>
  <div className={`navbar row container ${variant}`}>
    <Logo />
    <div className="menu row">
      <NavLink
        exact
        to='/'
        activeClassName="selected"
        >
        Nosotros
      </NavLink>
      <NavLink
        to='/areas'
        activeClassName="selected"
        >
          Áreas de práctica
      </NavLink>
      <NavLink
        to='/equipo'
        activeClassName="selected"
        >
        Equipo
      </NavLink>
      <NavLink
        to='/trabajo'
        activeClassName="selected"
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
