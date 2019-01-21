import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const getCs = (variant, lang) => {
  if (variant === 'navbar') {
    return `menu row ${lang}`
  }
  else if(variant === 'footer'){
    return "menu-footer column"
  }
  else return "menu-side column"
}

const Links = ({ variant, onClick, lang }) =>
  <div className={getCs(variant, lang)}>
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
       {lang ==='es' ? 'Áreas de práctica' : 'Practice areas'}
    </NavLink>
    <NavLink
      to='/equipo'
      activeClassName="selected"
      onClick={onClick}
      >
      {lang ==='es' ? 'Equipo' : 'Team'}
    </NavLink>
    <NavLink
      to='/trabajo'
      activeClassName="selected"
      onClick={onClick}
      >
      {lang ==='es' ? 'Trabaja con nosotros' : 'Careers'}
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
