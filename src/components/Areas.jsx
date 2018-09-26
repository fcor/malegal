import React from 'react'
import { areas } from '../utils/areas.js'

class Areas extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div className="container column">
        <Header />
        <Cards />
      </div>
    )
  }
}

const Header = () =>
  <div className="areas-header column">
    <h1>
      ÁREAS DE PRÁCTICA
    </h1>
    <p>EN MUÑOZ AYA CONTAMOS CON UN EQUIPO ALTAMENTE CALIFICADO PARA PRESTAR UN EXCELENTE SERVICIO DE ASESORÍA LEGAL</p>
  </div>

const Cards = () =>
  areas.map((item) => {
    return (
      <div className="areas-card row" key={item.title}>
        <div className="areas-card-left column">
          <h1>
            {item.title}
          </h1>
          {/* <p>¿Tienes mas preguntas?
            <span>
              <a href="mailto:administrativo@malegal.co">
                Contáctanos.
              </a>
            </span>
          </p> */}
        </div>
        <div className="areas-card-right column">
          <p>
            {item.text}
          </p>
          <ul>
            {item.bullets.map((bullet) => {
              return (
                  <li key={bullet}>{bullet}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  })


export default Areas
