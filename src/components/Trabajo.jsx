import React from 'react'
import SVG from './SVG'

const getInputDetails = (type) => {
  if (type === 'name') {
    return {
      id: 'name',
      type: 'text',
      label: 'NOMBRE *',
      placeholder: 'Escribe tu nombre'
    }
  } else if (type === 'email') {
    return {
      id: 'email',
      type: 'email',
      label: 'CORREO ELECTRÓNICO *',
      placeholder: 'Escribe tu correo'
    }
  } else {
    return {
      id: 'phone',
      type: 'tel',
      label: 'TELÉFONO *',
      placeholder: 'Escribe tu teléfono'
    }
  }
}

class Trabajo extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  handleSubmit(){
    fetch('https://us-central1-malegal-dabd2.cloudfunctions.net/sendMail',{
      method: "POST",
      body:'{"name": "Fabio"}',
      headers: {
        "Content-Type": "application/json"
        }
      }
    )
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      })
  }

  handleSelectedFile(e){
    e.preventDefault();
    const file = e.target.files[0]
    const data = new FormData()
    data.append('upload', file)
    fetch('http://killpop-api.glitch.me/uploadFile', {
      method: 'POST',
      body: data // This is your file object
      }).then(
        response => console.log(response)
        // response.json() // if the response is a JSON object
      ).then(
        success => console.log(success) // Handle the success response object
      ).catch(
        error => console.log(error) // Handle the error response object
      )

  }

  render() {
    return(
      <div className="work-box row">
        <WorkCard />
        <WorkForm
          handleSubmit={this.handleSubmit}
          handleSelectedFile={this.handleSelectedFile}
        />
      </div>
    )
  }
}

const WorkCard = () =>
  <div className="work-card column">
    <header>
      TRABAJA CON NOSOTROS
    </header>
    <p>
      En Muñoz Aya Legal buscamos personas comprometidas con el conocimiento y la excelencia, que busquen un espacio  para aprender y crecer junto a nosotros.  Si quieres ser parte de nuestro equipo, envíanos tu hoja de vida y nos pondremos en contacto contigo.
    </p>
    <h2>
      LLENA Y ENVÍANOS EL FORMULARIO CON TU CV
    </h2>
    <SVG />
  </div>

const WorkForm = ({handleSubmit, handleSelectedFile}) =>
  <div className="work-form">
    <div className="rect"></div>
    <header>FORMULARIO</header>
    <div className="column">
      <Input variant="name" />
      <Input variant="email" />
      <Input variant="phone" />
      <Submit handleSelectedFile={handleSelectedFile}  />
      <TextArea />
      <button onClick={handleSubmit} className="submit">
        ENVIAR
      </button>
    </div>
  </div>

const Input = ({variant}) => {
  const input = getInputDetails(variant)
  return(
    <div className="work-form-input column">
      <label htmlFor={input.id} className="work-form-labels">
        {input.label}
      </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.id}
      />
    </div>
  )
}

const Submit = ({handleSelectedFile}) =>
  <div className="work-form-submit column">
    <p className="work-form-labels">
      ADJUNTA TU CV
    </p>
    <input  type="file" name="upload" onChange={handleSelectedFile} />
    <button>Adjuntar archivo</button>
    {/* <form method="post" enctype="multipart/form-data" action="http://killpop-api.glitch.me/uploadFile">
      <label for="file">Upload a file</label>
      <input type="file" name="upload"/>
      <input type="submit" class="button"/>
    </form> */}
  </div>

const TextArea = () =>
  <div className="work-form-textarea column">
    <label htmlFor="textarea" className="work-form-labels">
      ¿POR QUÉ QUIERES UNIRTE A NOSOTROS?
    </label>
    <textarea
      id="textarea"
    />
  </div>

export default Trabajo
