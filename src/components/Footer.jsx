import React from 'react'
import Links from './Links'
import Logo from './Logo'
import mar from '../assets/img/mar.png'
import puerto from '../assets/img/puerto.png'
import terrestre from '../assets/img/terrestre.png'

const getContactDetails = (variant) => {
  if (variant === 'address') {
    return {
      icon: mar,
      text: 'Calle 73 # 9-42 / Oficina 409 Bogotá, Colombia'
    }
  } else if (variant === 'phone') {
    return {
      icon: puerto,
      text: '(+57) (1) 702 03 30'
    }
  } else {
    return {
      icon: terrestre,
      text: 'administrativo@malegal.co'
    }
  }
}

const Footer = () =>
  <footer>
    <div className="container">
      <div className="footer-box column">
        <div className="footer-box-top row">
          <Logo />
          <ContactBox />
        </div>
        <Privacy />
      </div>
    </div>

  </footer>

const ContactBox = () =>
  <div className="contact-box row">
    <Contact />
    <NavLinks />
  </div>

const Privacy = () =>
  <div className="privacy-box">
    Política de privacidad | © 2018 Malegal. Todos los derechos reservados.
  </div>

const Contact = () =>
  <div className="contact-box-left column">
    <p className="contact-box-title">CONTÁCTENOS</p>
    <ContactDetail variant="address" />
    <ContactDetail variant="phone" />
    <ContactDetail variant="mail" />
  </div>

const NavLinks = () =>
<div>
  <p className="contact-box-title">LINKS</p>
  <Links variant="footer"/>
</div>

const ContactDetail = ({ variant }) => {
  const contact = getContactDetails(variant)
  return (
    <div className="contact-detail row">
      <img
        src={contact.icon}
        alt={variant}
        className="contact-detail-icon"
      />
      <p className="contact-detail-text">
        {contact.text}
      </p>
    </div>
  )
}

export default Footer
