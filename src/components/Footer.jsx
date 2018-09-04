import React from 'react'
import Links from './Links'
import Logo from './Logo'
import location from '../assets/img/location.png'
import mail from '../assets/img/mail.png'
import telephone from '../assets/img/telephone.png'

const getContactDetails = (variant) => {
  if (variant === 'address') {
    return {
      icon: location,
      text: 'Calle 73 # 9-42 / Oficina 409 Bogotá, Colombia'
    }
  } else if (variant === 'phone') {
    return {
      icon: telephone,
      text: '(+57) (1) 702 03 30'
    }
  } else {
    return {
      icon: mail,
      text: 'administrativo@malegal.co'
    }
  }
}

const Footer = () =>
  <footer>
    <div className="container">
      <div className="footer-box column">
        <div className="footer-box-top row">
          <div className="footer-logo">
            <Logo />
          </div>
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
    <div className="contact-details">
      <ContactDetail variant="address" />
      <ContactDetail variant="phone" />
      <ContactDetail variant="mail" />
    </div>
  </div>

const NavLinks = () =>
<div className="footer-navlinks">
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
        className={`contact-detail-icon ${variant === 'address' ? 'small' : '' }`}
      />
      <p className="contact-detail-text">
        {contact.text}
      </p>
    </div>
  )
}

export default Footer
