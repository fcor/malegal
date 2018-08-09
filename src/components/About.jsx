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
      text: 'Pastry sugar plum carrot cake sweet gummi bears sweet lemon drops muffin lemon drops. Chocolate bar cheesecake tart icing marzipan dessert caramels. Croissant donut oat cake cake I love bonbon. Gummies sugar plum pudding I love jelly-o fruitcake.'
    }
  } else {
    return {
      icon: terrestre,
      title: 'Laboral y Seguridad Social',
      text: 'Pastry sugar plum carrot cake sweet gummi bears sweet lemon drops muffin lemon drops. Chocolate bar cheesecake tart icing marzipan dessert caramels. Croissant donut oat cake cake I love bonbon. Gummies sugar plum pudding I love jelly-o fruitcake.'
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
      <SVG />
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

const SVG = () =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="41.22px" height="35px" viewBox="0 0 368 312.398">
  <path d="M223.414,285.949h-24.406V62.262h102.863l-43.57,69.14c-2.211,3.504-1.16,8.141,2.347,10.348
  	c1.243,0.785,2.625,1.156,3.993,1.156c2.492,0,4.929-1.238,6.355-3.5l37.789-59.965l37.789,59.965
  	c2.207,3.504,6.844,4.555,10.348,2.344c3.508-2.207,4.558-6.844,2.348-10.348l-43.571-69.14h0.551
  	c6.422,0,11.633-5.207,11.633-11.629S322.676,39,316.25,39h-85.566c-4.832-7.027-11.961-12.348-20.309-14.875
  	C209.18,10.605,197.832,0,184,0c-13.832,0-25.18,10.605-26.375,24.125c-8.348,2.527-15.48,7.848-20.309,14.875H51.75
  	c-6.422,0-11.633,5.211-11.633,11.633s5.207,11.629,11.633,11.629h0.551L8.73,131.402c-2.21,3.504-1.16,8.141,2.348,10.348
  	c1.242,0.785,2.625,1.156,3.992,1.156c2.492,0,4.93-1.238,6.356-3.5l37.789-59.965L97,139.406c2.211,3.504,6.844,4.555,10.352,2.344
  	c3.507-2.207,4.554-6.844,2.347-10.348l-43.57-69.14h102.863v223.687h-24.406c-14.609,0-26.449,11.844-26.449,26.449h131.726
  	C249.863,297.793,238.023,285.949,223.414,285.949L223.414,285.949z M223.414,285.949"/>
  <path d="M114.43,150.887H4c-2.207,0-4,1.789-4,4c0,32.652,26.562,59.215,59.215,59.215c32.648,0,59.215-26.563,59.215-59.215
  	C118.43,152.68,116.637,150.887,114.43,150.887L114.43,150.887z M114.43,150.887"/>
  <path d="M364,150.887H253.57c-2.207,0-4,1.789-4,4c0,32.652,26.567,59.215,59.215,59.215c32.653,0,59.215-26.563,59.215-59.215
  	C368,152.68,366.207,150.887,364,150.887L364,150.887z M364,150.887"/>
  </svg>

export default About
