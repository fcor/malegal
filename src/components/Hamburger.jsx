import React from 'react'
import Logo from './Logo'
import Links from './Links'

const getAnimationCS = (isActive) => {
  if (isActive === null) {
    return ''
  } else if (isActive === true) {
    return 'active'
  } else if (isActive === false) {
    return 'inactive'
  }
}

class Hamburger extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: null,
      // on: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(
      ({active}) => ({active: !active}),
    )
    document.body.classList.toggle('no-scroll')
  }

  render() {
    const { active } = this.state
    return(
      <div className="side-menu">
        <div className={`hamburger-menu`} onClick={this.handleClick} >
          <div className="hamburger-box" >
            <div className={`bar-menu b1 ${getAnimationCS(active)}`}></div>
            <div className={`bar-menu b2 ${getAnimationCS(active)}`}></div>
            <div className={`bar-menu b3 ${getAnimationCS(active)}`}></div>
          </div>
        </div>
        <SideMenu isActive={active} onClickMobile={this.handleClick} />
      </div>
    )
  }
}

const SideMenu = (props) => {
  const isActive = props.isActive ? 'active' : ''
  return(
    <div className={`menu-responsive ${isActive}`}>
      <div className="menu-responsive-content">
        <Logo />
        <Links variant="side" onClick={props.onClickMobile} />
      </div>
      <div className="menu-responsive-footer">
        Política de privacidad | © 2018 Malegal. Todos los derechos reservados.
      </div>
    </div>
  )
}

export default Hamburger
