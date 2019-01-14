import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const getCs = (variant) => {
  if (variant === 'navbar') {
    return "menu row"
  }
  else if(variant === 'footer'){
    return "menu-footer column"
  }
  else return "menu-side column"
}

const Links = ({ variant, onClick }) =>
  <div className={getCs(variant)}>
    {/* <NavLink
      exact
      to='/'
      activeClassName="selected"
      onClick={onClick}
      >
      Nosotros
    </NavLink> */}
    <NavLink
      to='/areas'
      activeClassName="selected"
      onClick={onClick}
      >
        Áreas de práctica
    </NavLink>
    <NavLink
      to='/equipo'
      activeClassName="selected"
      onClick={onClick}
      >
      Equipo
    </NavLink>
    <NavLink
      to='/trabajo'
      activeClassName="selected"
      onClick={onClick}
      >
      Trabaja con nosotros
    </NavLink>
  </div>

Links.propTypes = {
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Links.defaultProps = {
  onClick: () => {}
};

export default Links
