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
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      isFileLoaded: false,
      isLoadingFile: null,
      fileName: '',
      text: ''
    }
    this.handleSelectedFile = this.handleSelectedFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

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

  uploadFile(file){
    const data = new FormData()
    data.append('upload', file)
    fetch('http://killpop-api.glitch.me/uploadFile', {
      method: 'POST',
      body: data 
      }).then(
        response => response.json() // if the response is a JSON object
      ).then(
        success => {
          console.log(success) // Handle the success response object
          this.setState({
            isLoadingFile: false,
            isFileLoaded: true,
            fileName: file.name
          })
        }
      ).catch(
        error => console.log(error) // Handle the error response object
      )
  }

  handleSelectedFile(e){
    e.preventDefault();
    const file = e.target.files[0]
    
    this.setState(() => {
      return {isLoadingFile: true, isFileLoaded:false}
    }, () => this.uploadFile(file))
  }

  render() {
    const { isFileLoaded, fileName, isLoadingFile } = this.state
    return(
      <div className="work-box row">
        <WorkCard />
        <WorkForm
          handleSubmit={this.handleSubmit}
          handleSelectedFile={this.handleSelectedFile}
          isFileLoaded={isFileLoaded}
          isLoadingFile={isLoadingFile}
          fileName={fileName}
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

const WorkForm = ({handleSubmit, handleSelectedFile, isLoadingFile, isFileLoaded, fileName}) =>
  <div className="work-form">
    <div className="rect"></div>
    <header>FORMULARIO</header>
    <div className="column">
      <Input variant="name" />
      <Input variant="email" />
      <Input variant="phone" />
      <Submit 
        handleSelectedFile={handleSelectedFile} 
        isFileLoaded={isFileLoaded}
        isLoadingFile={isLoadingFile}
        fileName={fileName}
      />
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

const Submit = ({handleSelectedFile, isLoadingFile, isFileLoaded, fileName}) =>
  <div className="work-form-submit column">
    <p className="work-form-labels">
      ADJUNTA TU CV
    </p>
    <div className="row">
      <label htmlFor="file-upload">
        Adjuntar archivo
      </label>
      <input 
        id="file-upload" 
        type="file" 
        name="upload" 
        onChange={handleSelectedFile} 
      />
      {isLoadingFile &&
        <p className="file">Cargando...</p>
      }
      {isFileLoaded &&
        <p className="file">{fileName}</p>
      }
    </div>
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
