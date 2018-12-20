import alejandraSmall from '../assets/img/alejandra_small.jpg'
import alejandraModal from '../assets/img/alejandra_modal.jpg'
import cristinaModal from '../assets/img/cristina_modal2.jpg'
import cristinaSmall from '../assets/img/cristina_small2.jpg'
import mariaSmall from '../assets/img/maria_small2.jpg'
import mariaModal from '../assets/img/maria_modal2.jpg'
import sebastianSmall from '../assets/img/sebastian_small.jpg'
import sebastianModal from '../assets/img/sebastian_modal.jpg'
import danielaSmall from '../assets/img/daniela_small2.jpg'
import danielaModal from '../assets/img/daniela_modal2.jpg'
import edgarSmall from '../assets/img/edgar_small.jpg'
import edgarModal from '../assets/img/edgar_modal.jpg'


const getMemberInfo = (name) => {
  if (name === 'Daniela') {
    return {
      name: 'Daniela Rivera',
      position: 'Asociada',
      avatar: danielaSmall,
      modal: danielaModal,
      email: 'drivera@malegal.co',
      bio: 'Abogada de la Universidad Católica de Colombia, con experiencia en litigio y contratación estatal, con profundización en derecho laboral, seguridad social y derecho administrativo. Como miembro del equipo de litigios en materia de seguridad social y laboral ejerce funciones de apoyo en la sustanciación de memoriales, contestación de demandas, y asistencia a audiencias. '
    }
  } else if (name === 'Maria') {
    return {
      name: 'María Alejandra Giraldo',
      position: 'Asociada Senior',
      avatar: alejandraSmall,
      modal: alejandraModal,
      email: 'mgiraldo@malegal.co',
      bio: 'Maria Alejandra es Abogada, LLM en Derecho Financiero y Bancario, con una amplia experiencia en temas de gobierno corporativo y compliance de las entidades financieras, negociación de contratos financieros, mercado de valores y regulación de servicios y productos bancarios. Coordina los esfuerzos del equipo en materia de transacciones estructuradas y facilidades crediticias, así como la consultoría legal de la firma en materia de derecho financiero y regulación cambiaria. '
    }
  } else if (name === 'Cristina') {
    return {
      name: 'Cristina Rojas',
      position: 'Asociada Senior',
      avatar: cristinaSmall,
      modal: cristinaModal,
      email: 'ana@malegal.co',
      bio: 'Abogada de la Universidad Sergio Arboleda, con énfasis en Derecho Anglosajón, hace parte del equipo de litigios en materia de seguridad social y laboral. Dentro de sus funciones se encuentra la preparación, presentación y contestación de demandas, asistencia a audiencias y diligencias judiciales. Adicionalmente, apoya en labores de investigación y consultoría en materia Pensional.'
    }
  } else if (name === 'Sebastian') {
    return {
      name: 'Sebastian Zapata Veira',
      position: 'Asociado',
      avatar: sebastianSmall,
      modal: sebastianModal,
      email: 'szapata@malegal.co',
      bio: 'Abogado con experiencia en inversiones y operaciones de tesorería de entidades vigiladas por la Superintendencia Financiera de Colombia. Trabajó en López Montealegre & Abogados Asociados, en la Corporación Financiera Colombiana y en Colfondos - Pensiones y Cesantías. Es autor y coautor de papers y capítulos de libros en temas de fondos de inversión colectiva, hedge funds y fondos de capital privado. Fue ganador del Concurso Arquitectos del Mercado de Capitales del AMV. Actualmente se desempeña en el área de derecho financiero de la firma, en temas regulatorios, derivados y fintech.'
    }
  } else if (name === 'Edgar') {
    return {
      name: 'Edgar Muñoz',
      position: 'Socio',
      avatar: edgarSmall,
      modal: edgarModal,
      email: 'emunoz@malegal.co',
      bio: 'Abogado, LLM, MBA, con más de 18 años de experiencia en temas relacionados con inversiones, derecho corporativo, bancario, y de valores, banca de inversión, fondos de inversión colectiva y fondos de capital privado; operaciones de tesorería y negociación de créditos sindicados. Cuenta con una amplia experiencia profesional en estos campos, tanto en el sector público como privado a través de su vinculación a firmas de abogados de primer nivel global y local, Citibank, Davivienda, y el Ministerio de Hacienda y Crédito Público, entre otros.'
    }
  } else if (name === 'MariaP') {
    return {
      name: 'Maria Paula Pulido',
      position: 'Asociada',
      avatar: mariaSmall,
      modal: mariaModal,
      email: 'mpulido@malegal.co',
      bio: 'Abogada de la Universidad Sergio Arboleda, en la cual hizo parte del “Programa de Honores Rodrigo Noguera Laborde” que exalta a los estudiantes que se destacan por sutrayectoria académica y personal. Cuenta con experiencia en derecho comercial y laboral; en el área de litigio tiene experiencia en procesos laborales, de seguridad social y protección al consumidor financiero. Actualmente se desempeña en el área de litigio de la firma, teniendo a su cargo la representación y defensa jurídica de los procesos judiciales de las entidades financieras clientes de la Firma. Previo a su ingreso a la Firma, trabajó en el Banco CorpBanca y en el área de recursos humanos de la Multinacional ZT'
    }
  }
}

export default getMemberInfo
