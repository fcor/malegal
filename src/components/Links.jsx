import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const getCs = (variant) => {
  if (variant === 'navbar') {
    return "menu row"
  }
  return "menu-footer column"
}

const Links = ({ variant }) =>
  <div className={getCs(variant)}>
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

Links.propTypes = {
  variant: PropTypes.string.isRequired,
}

export default Links
