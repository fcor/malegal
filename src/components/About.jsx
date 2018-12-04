import React from 'react'
// import { Link } from 'react-router-dom'
// import SVG from './SVG'
// import PropTypes from 'prop-types'

// const getCardContent = (variant) =>{
//   if (variant === 'one') {
//     return {
//       title: 'Corporativo, Financiero y Valores',
//       text: 'Pastry sugar plum carrot cake sweet gummi bears sweet lemon drops muffin lemon drops. Chocolate bar cheesecake tart icing marzipan dessert caramels. Croissant donut oat cake cake I love bonbon. Gummies sugar plum pudding I love jelly-o fruitcake.'
//     }
//   } else {
//     return {
//       title: 'Laboral y Seguridad Social',
//       text: 'Pastry sugar plum carrot cake sweet gummi bears sweet lemon drops muffin lemon drops. Chocolate bar cheesecake tart icing marzipan dessert caramels. Croissant donut oat cake cake I love bonbon. Gummies sugar plum pudding I love jelly-o fruitcake.'
//     }
//   }
// }

class About extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {
    return(
      // <div className="about">
      <div>
        {/* <div className="container">
          <div className="about-box column">
            <Text />
            <Cards />
            <CTA />
          </div>
        </div> */}
      </div>
    )
  }
}

// const Text = () =>
//   <div className="about-header-text column">
//     <h1>NUESTRAS ÁREAS DE PRÁCTICA</h1>
//     <p>ENCUENTRA LOS MEJORES ABOGADOS SEGÚN TU NECESIDAD</p>
//   </div>

// const Cards = () =>
//   <div className=" about-cards column">
//     {/* <Link to="areas" > */}
//       <Card variant="one" />
//     {/* </Link> */}
//     {/* <Link to="areas" > */}
//       <Card variant="two" />
//     {/* </Link> */}
//   </div>


// const Card = ({ variant }) =>{
//   const card = getCardContent(variant)
//   return(
//     <div className="about-card column">
//       <SVG />
//       <h1>{card.title}</h1>
//       <p>{card.text}</p>
//     </div>
//   )
// }

// const CTA = () =>
//   <Link to="areas" >
//     <button className="about-button">
//       CONOCE MAS
//     </button>
//   </Link>

export default About
