import React from 'react'
import areas1 from '../assets/img/areas1.png'
import areas2 from '../assets/img/areas2.png'

const cardDetails = [
  {
    title: 'CORPORATIVO',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin. Macaroon croissant muffin danish chupa chups. Jujubes sugar plum pastry danish brownie danish muffin caramels caramels. Lollipop bonbon cheesecake candy canes jelly tootsie roll biscuit.',
    img: areas1
  },
  {
    title: 'FINANCIERO Y VALORES',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin. Macaroon croissant muffin danish chupa chups. Jujubes sugar plum pastry danish brownie danish muffin caramels caramels. Lollipop bonbon cheesecake candy canes jelly tootsie roll biscuit.',
    img: areas2
  },
  {
    title: 'DERECHO LABORAL Y SEGURIDAD SOCIAL',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin. Macaroon croissant muffin danish chupa chups. Jujubes sugar plum pastry danish brownie danish muffin caramels caramels. Lollipop bonbon cheesecake candy canes jelly tootsie roll biscuit.',
    img: areas1
  },
]

const Areas = () =>
  <div className="container column">
    <Header />
    <Cards />
  </div>

const Header = () =>
  <div className="areas-header column">
    <h1>
      ÁREAS DE PRÁCTICA
    </h1>
    <p>EN MUÑOZ AYA CONTAMOS CON UN EQUIPO ALTAMENTE CALIFICADO PARA PRESTAR UN EXCELENTE SERVICIO DE ASESORÍA LEGAL</p>
  </div>

const Cards = () =>
  cardDetails.map((item) => {
    return (
      <div className="areas-card row" key={item.title}>
        <div className="areas-card-left column">
          <h1>
            {item.title}
          </h1>
          <p>
            {item.text}
          </p>
        </div>
        <img
          src={item.img}
          alt="area"
        />
      </div>
    )
  })


export default Areas
