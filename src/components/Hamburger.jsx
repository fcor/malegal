import React from 'react'
import Logo from './Logo'
import Links from './Links'
import ScrollLock from 'react-scrolllock'
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const getAnimationCS = (isActive) => {
  if (isActive === null) {
    return ''
  } else if (isActive === true) {
    return 'active'
  } else if (isActive === false) {
    return 'inactive'
  }
}

const getColor = (type) => type === 'home' ? 'home' : ''

class Hamburger extends React.Component {
  targetElement = null

  constructor(props){
    super(props)
    this.state = {
      active: null,
      // on: false
    }
    this.handleClick = this.handleClick.bind(this)
  }


   componentDidMount() {
     // this.targetElement = document.querySelector('#side-menu');
   }

  handleClick(){
    // const  isActive = this.state.active
    // if (isActive) {
    //   disableBodyScroll(this.targetElement);
    // } else {
    //   enableBodyScroll(this.targetElement);
    // }
    this.setState(
      ({active}) => ({active: !active}),
    )

    // document.body.classList.toggle('no-scroll')
  }

  render() {
    const { active } = this.state
    const { variant, lang } = this.props
    return(
      <div id="side-menu" className="side-menu">
        <div className={`hamburger-menu`} onClick={this.handleClick} >
          <div className="hamburger-box" >
            <div className={`bar-menu b1 ${getColor(variant)} ${getAnimationCS(active)}`}></div>
            <div className={`bar-menu b2 ${getColor(variant)} ${getAnimationCS(active)}`}></div>
            <div className={`bar-menu b3 ${getColor(variant)} ${getAnimationCS(active)}`}></div>
          </div>
        </div>
        <SideMenu isActive={active} onClickMobile={this.handleClick} lang={lang} />
      </div>
    )
  }
}

const SideMenu = (props) => {
  const isActive = props.isActive ? 'active' : ''
  return(
    <div className={`menu-responsive ${isActive}`}>
      { props.isActive &&
        <ScrollLock />
      }
      <div className="menu-responsive-content">
        <Logo />
        <Links lang={props.lang} variant="side" onClick={props.onClickMobile} />
      </div>
      <div className="menu-responsive-footer">
        Política de privacidad | © 2018 Malegal. Todos los derechos reservados.
      </div>
    </div>
  )
}

export default Hamburger
