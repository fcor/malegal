import React from 'react'
import puerto from '../assets/img/puerto.png'
import terrestre from '../assets/img/terrestre.png'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const getCardContent = (variant) =>{
  if (variant === 'one') {
    return {
      icon: puerto,
      title: 'Corporativo, Financiero y Valores',
      text: 'Pastry sugar plum carrot cake sweet gummi bears sweet lemon drops muffin lemon drops. Chocolate bar cheesecake tart icing marzipan dessert caramels. Croissant donut oat cake cake I love bonbon. Gummies sugar plum pudding I love jelly-o fruitcake candy canes jelly-o. Candy I love jelly.'
    }
  } else {
    return {
      icon: terrestre,
      title: 'Laboral y Seguridad Social',
      text: 'Pastry sugar plum carrot cake sweet gummi bears sweet lemon drops muffin lemon drops. Chocolate bar cheesecake tart icing marzipan dessert caramels. Croissant donut oat cake cake I love bonbon. Gummies sugar plum pudding I love jelly-o fruitcake candy canes jelly-o. Candy I love jelly.'
    }
  }
}

const About = () =>
  <div className="about">
    <div className="container">
      <div className="about-box column">
        <Text />
        <Cards />
        <CTA />
      </div>
    </div>
  </div>

const Text = () =>
  <div className="about-header-text column">
    <h1>NUESTRAS ÁREAS DE PRÁCTICA</h1>
    <p>ENCUENTRA LOS MEJORES ABOGADOS SEGÚN TU NECESIDAD</p>
  </div>

const Cards = () =>
  <div className=" about-cards column">
    <Card variant="one" />
    <Card variant="two" />
  </div>


const Card = ({ variant }) =>{
  const card = getCardContent(variant)
  return(
    <div className="about-card column">
      <img
        src={card.icon}
        alt="icon"
        className="about-card-icon"
      />
      <h1>{card.title}</h1>
      <p>{card.text}</p>
    </div>
  )
}

const CTA = () =>
  <Link to="areas" >
    <button className="about-button">
      CONOCE MAS
    </button>
  </Link>

export default About
