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


const getMemberInfo = (name, lang) => {
  if (name === 'Daniela') {
    if (lang === 'en') {
      return {
        name: 'Daniela Rivera',
        position: 'Associate ',
        avatar: danielaSmall,
        modal: danielaModal,
        email: 'drivera@malegal.co',
        bio: 'Daniela is a graduate of the School of Law of Sergio Arboleda University, and a participant of the “Rodrigo Noguera Laborde Honors Program”, which awards scholarships for those students who demonstrate excellence in both their academic and personal backgrounds. She has experience in labor, social security and commercial law, encompassing legal advice and litigation. Currently she leads the litigation area, where she is in charge of the representation and defense of clients in legal proceedings. Prior to joining to the firm she worked at Copbanca Bank (currently Itaú), and more recently, at the Chinese multinational ZTE Corporation.'
      }
    }
    return {
      name: 'Daniela Rivera',
      position: 'Asociada',
      avatar: danielaSmall,
      modal: danielaModal,
      email: 'drivera@malegal.co',
      bio: 'Abogada de la Universidad Sergio Arboleda, en la cual hizo parte del “Programa de Honores Rodrigo Noguera Laborde” que exalta a los estudiantes que se destacan por su trayectoria académica y personal. Cuenta con experiencia en derecho comercial y laboral; en el área de litigio tiene experiencia en procesos laborales, de seguridad social y protección al consumidor financiero. Actualmente se desempeña en el área de litigio de la firma, teniendo a su cargo la representación y defensa jurídica de los procesos judiciales de las entidades financieras clientes de la Firma. Previo a su ingreso a la Firma, trabajó en el Banco CorpBanca y en el área de recursos humanos de la Multinacional ZTE.'
    }
  } else if (name === 'Maria') {
    if (lang === 'en') {
      return {
        name: 'María Alejandra Giraldo',
        position: 'Senior Associate',
        avatar: alejandraSmall,
        modal: alejandraModal,
        email: 'mgiraldo@malegal.co',
        bio: `Maria Alejandra is a lawyer with a master's degree in International Finance and Banking Law, who has wide experience in matters related to corporate governance and compliance, negotiation of financial agreements, securities and regulations of banking services and products. Currently, she coordinates the financial and banking practice in financial transactions, credit facilities, and in the banking and securities markets´ legal advice. As a Senior Associate at our firm, she has provided legal advice to the Liquidity Facility and Onshore Security Agent in a major Public-Private Partnership agreement for toll roads funding, construction and maintenance in Colombia, known as "Ruta del Cacao". She has further participated in the design of an standard long-term power purchase agreement in Colombia, and advised institutional clients on matters such as conflicts of interest and handling of inside information within their trading floors, among other issues.`
      }
    }
    return {
      name: 'María Alejandra Giraldo',
      position: 'Asociada Senior',
      avatar: alejandraSmall,
      modal: alejandraModal,
      email: 'mgiraldo@malegal.co',
      bio: 'María Alejandra es Abogada, LLM en Derecho Financiero y Bancario, con amplia experiencia en temas de gobierno corporativo y cumplimiento de las entidades financieras, negociación de contratos financieros, mercado de valores y regulación de servicios y productos bancarios. Coordina los esfuerzos del equipo en materia de transacciones estructuradas y facilidades crediticias, así como la consultoría legal de la firma en materia de derecho financiero y regulación cambiaria. Como Asociada Senior de nuestra firma, ha participado en la asesoría legal a los agentes del proyecto de infraestructura “Ruta del cacao” (proyecto de 4° Generación), en la estructuración de un contrato de compra y venta de energía a largo plazo, y en la asesoría a los clientes institucionales en temas de conflictos de interés y manejo de información privilegiada dentro de sus mesas de negociación, entre otros. '
    }
  } else if (name === 'Cristina') {
    if (lang === 'en') {
      return {
        name: 'Cristina Rojas',
        position: 'Legal assistant',
        avatar: cristinaSmall,
        modal: cristinaModal,
        email: 'administrativo@malegal.co',
        bio: 'Legal assistant with more than 20 years of working experience at leading local firms. Prior to joining to the firm she worked at Baker Mckenzie Colombia.'
      }  
    }
    return {
      name: 'Cristina Rojas',
      position: 'Asistente administrativa',
      avatar: cristinaSmall,
      modal: cristinaModal,
      email: 'administrativo@malegal.co',
      bio: 'Asistente administrativa y contable con más de 20 años de experiencia apoyando importantes firmas de abogados locales. Antes de vincularse con la firma trabajó para Baker McKenzie Colombia.'
    }
  } else if (name === 'Sebastian') {
    if (lang === 'en') {
      return {
        name: 'Sebastian Zapata Veira',
        position: 'Associate ',
        avatar: sebastianSmall,
        modal: sebastianModal,
        email: 'szapata@malegal.co',
        bio: 'Lawyer with experience in banking, capital markets, corporate governance and regulatory compliance of Colombian financial entities. Prior to joining to the firm he worked at a local leading law firm, at Scotiabank’s pension fund manager in Colombia, and at the main merchant bank locally. He is an author of papers and book chapters with respect to Investment Funds, Hedge funds and Private Equity Funds. He earned an scholarship from the Colombian Securities Self-Regulatory Agency, after winning a local competition of public policy proposals to develop the Colombian securities market. He currently provides advice on regulation, financial derivatives and fintech.'
      }
    }
    return {
      name: 'Sebastian Zapata Veira',
      position: 'Asociado',
      avatar: sebastianSmall,
      modal: sebastianModal,
      email: 'szapata@malegal.co',
      bio: 'Abogado con experiencia en inversiones y operaciones de tesorería de entidades vigiladas por la Superintendencia Financiera de Colombia. Trabajó en López Montealegre & Abogados Asociados, en la Corporación Financiera Colombiana y en Colfondos - Pensiones y Cesantías. Es autor y coautor de papers y capítulos de libros en temas de fondos de inversión colectiva, hedge funds y fondos de capital privado. Fue ganador del Concurso Arquitectos del Mercado de Capitales del AMV. Actualmente se desempeña en el área de derecho financiero de la firma, en temas regulatorios, derivados y fintech.'
    }
  } else if (name === 'Edgar') {
    if (lang === 'en') {
      return {
        name: 'Edgar Muñoz',
        position: 'Partner',
        avatar: edgarSmall,
        modal: edgarModal,
        email: 'emunoz@malegal.co',
        bio: 'Lawyer, LLM and MBA with more than 18 years of experience regarding foreign investment, corporate, banking and securities law, investment banking, investment funds, treasury operations and contractual negotiation of syndicated credits with national and foreign banks and other institutions. Its experience encompasses both the private and public sector, at Baker Mckenzie Colombia, CMS Rodríguez Azuero, Citibank Colombia, Posse Herrera & Ruíz, Davivienda, and the Ministry of Finance and Public Credit, among others.'
      }  
    }
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
