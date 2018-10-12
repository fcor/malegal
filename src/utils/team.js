import man from '../assets/img/man.png'
import woman from '../assets/img/woman.png'
import alejandraSmall from '../assets/img/alejandra_small.jpg'
import alejandraModal from '../assets/img/alejandra_modal.jpg'
import lauraSmall from '../assets/img/laura_small.jpg'
import lauraModal from '../assets/img/laura_modal.jpg'
import nataliaSmall from '../assets/img/natalia_small.jpg'
import nataliaModal from '../assets/img/natalia_modal.jpg'
import danielaSmall from '../assets/img/daniela_small.jpg'
import danielaModal from '../assets/img/daniela_modal.jpg'
import edgarSmall from '../assets/img/edgar_small.jpg'
import edgarModal from '../assets/img/edgar_modal.jpg'
import manLarge from '../assets/img/manLarge.png'


const getMemberInfo = (name) => {
  if (name === 'Daniela') {
    return {
      name: 'Daniela Guerrero Ordoñez',
      position: 'Asociada',
      avatar: danielaSmall,
      modal: danielaModal,
      email: 'daniela@malegal.co',
      bio: 'Abogada de la Universidad Católica de Colombia, con experiencia en litigio y contratación estatal, con profundización en derecho laboral, seguridad social y derecho administrativo. Como miembro del equipo de litigios en materia de seguridad social y laboral ejerce funciones de apoyo en la sustanciación de memoriales, contestación de demandas, y asistencia a audiencias. '
    }
  } else if (name === 'Maria') {
    return {
      name: 'María Alejandra Giraldo',
      position: 'Asociada Senior',
      avatar: alejandraSmall,
      modal: alejandraModal,
      email: 'maria@malegal.co',
      bio: 'Maria Alejandra es Abogada, LLM en Derecho Financiero y Bancario, con una amplia experiencia en temas de gobierno corporativo y compliance de las entidades financieras, negociación de contratos financieros, mercado de valores y regulación de servicios y productos bancarios. Coordina los esfuerzos del equipo en materia de transacciones estructuradas y facilidades crediticias, así como la consultoría legal de la firma en materia de derecho financiero y regulación cambiaria. '
    }
  } else if (name === 'Ana') {
    return {
      name: 'Ana Ortiz',
      position: 'Asociada Senior',
      avatar: woman,
      modal: manLarge,
      email: 'ana@malegal.co',
      bio: 'Abogada de la Universidad Sergio Arboleda, con énfasis en Derecho Anglosajón, hace parte del equipo de litigios en materia de seguridad social y laboral. Dentro de sus funciones se encuentra la preparación, presentación y contestación de demandas, asistencia a audiencias y diligencias judiciales. Adicionalmente, apoya en labores de investigación y consultoría en materia Pensional.'
    }
  } else if (name === 'Natalia') {
    return {
      name: 'Natalia García Pulido',
      position: 'Asociada',
      avatar: nataliaSmall,
      modal: nataliaModal,
      email: 'natalia@malegal.co',
      bio: 'Abogada de la Universidad Externado de Colombia, con profundización en derecho civil, derecho de seguros y contratos atípicos. Como miembro del equipo de derecho financiero participa en la revisión y negociación de contratos de diferentes transacciones y financiación de proyectos de infraestructura. Así mismo, apoya al grupo de derecho corporativo y financiero con labores de investigación y consultoría.'
    }
  } else if (name === 'Edgar') {
    return {
      name: 'Edgar Muñoz',
      position: 'Socio',
      avatar: edgarSmall,
      modal: edgarModal,
      email: 'edgar@malegal.co',
      bio: 'Abogado, LLM, MBA, con más de 18 años de experiencia en temas relacionados con inversiones, derecho corporativo, bancario, y de valores, banca de inversión, fondos de inversión colectiva y fondos de capital privado; operaciones de tesorería y negociación de créditos sindicados. Cuenta con una amplia experiencia profesional en estos campos, tanto en el sector público como privado a través de su vinculación a firmas de abogados de primer nivel global y local, Citibank, Davivienda, y el Ministerio de Hacienda y Crédito Público, entre otros.'
    }
  } else if (name === 'Laura') {
    return {
      name: 'Laura Villareal',
      position: 'Asociada',
      avatar: lauraSmall,
      modal: lauraModal,
      email: 'laura@malegal.co',
      bio: 'Abogada de la Pontificia Universidad Javeriana de Bogotá. Apoya al equipo de litigios ante la Superintendencia Financiera y ante la Superintendencia de Sociedades, donde está encargada de la vigilancia de procesos y preparación de contestaciones y memoriales. También ejerce en actividades relacionadas con la Secretaría General de entidades vigiladas por la Superintendencia Financiera. Participa activamente en la elaboración de diferentes conceptos e investigaciones en el área de Derecho Financiero.'
    }
  }
}

export default getMemberInfo
