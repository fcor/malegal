import nnSmall from '../assets/img/nn_small.jpg'
import nnModal from '../assets/img/nn_modal.jpg'
import cristinaModal from '../assets/img/cristina_modal2.jpg'
import cristinaSmall from '../assets/img/cristina_small2.jpg'
import carolinaSmall from '../assets/img/carolina_small.jpg'
import carolinaModal from '../assets/img/carolina_modal.jpg'
import sebastianSmall from '../assets/img/sebastian_small.jpg'
import sebastianModal from '../assets/img/sebastian_modal.jpg'
import sebastian2Small from '../assets/img/sebastian2_small.jpg'
import sebastian2Modal from '../assets/img/sebastian2_modal.jpg'
import danielaSmall from '../assets/img/daniela_small2.jpg'
import danielaModal from '../assets/img/daniela_modal2.jpg'
import edgarSmall from '../assets/img/edgar_small.jpg'
import edgarModal from '../assets/img/edgar_modal.jpg'
import ligiaSmall from '../assets/img/ligia_small.jpg'
import ligiaModal from '../assets/img/ligia_modal.jpg'


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
        name: 'Carolina Uribe',
        position: 'Associate',
        avatar: carolinaSmall,
        modal: carolinaModal,
        email: 'c.uribe@malegal.co',
        bio: `Carolina is a lawyer from the Pontificia Universidad Javeriana who has experience as legal advisor to local and foreign clients in Colombian banking and financial regulation, coordination and preparation of due diligence reports for financial entities in M&A deals, filings before the Colombian Financial Superintendence, drafting of loan and security agreements, advisor to tech companies who provide services to financial entities and structuration of financial products, among others. Currently, she coordinates the financial and banking practice in structured transactions and credit facilities, as well as the legal consulting of the firm in the practice of financial law, securities market and fintech.`
      }
    }
    return {
      name: 'Carolina Uribe',
      position: 'Asociada',
      avatar: carolinaSmall,
      modal: carolinaModal,
      email: 'c.uribe@malegal.co',
      bio: 'Carolina es abogada de la Pontificia Universidad Javeriana con experiencia en la asesoría legal a clientes nacionales y extranjeros en regulación financiera, coordinación y preparación de reportes de debida diligencia de entidades financieras en el marco de transacciones de fusiones y adquisiciones, trámites ante la Superintendencia Financiera de Colombia, contratos de crédito, garantías mobiliarias, asesoría a empresas tecnológicas para la prestación de servicios a entidades financieras y estructuración de productos financieros, entre otros. Actualmente, coordina los esfuerzos del equipo en materia de transacciones estructuradas y facilidades crediticias, así como la consultoría legal de la firma en materia de derecho financiero, mercado de valores y fintech.'
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
  } else if (name === 'SebastianD') {
    if (lang === 'en') {
      return {
        name: 'Sebastián Duarte',
        position: 'Associate ',
        avatar: sebastian2Small,
        modal: sebastian2Modal,
        email: 'sduarte@malegal.co',
        bio: 'Sebastián is a Law student from Universidad Sergio Arboleda. He currently focuses on financial regulation, derivatives and fintech.'
      }
    }
    return {
      name: 'Sebastián Duarte',
      position: 'Asociado',
      avatar: sebastian2Small,
      modal: sebastian2Modal,
      email: 'sduarte@malegal.co',
      bio: 'Sebastián es un abogado en formación en la Universidad Sergio Arboleda. Actualmente se desempeña en el área de Derecho Financiero de la firma, en temas regulatorios, derivados y fintech.'
    }
  } else if (name === 'Ligia') {
    if (lang === 'en') {
      return {
        name: 'Ligia González',
        position: 'Associate',
        avatar: ligiaSmall,
        modal: ligiaModal,
        email: 'lgonzalez@malegal.co',
        bio: 'Ligia is a lawyer from Universidad Externado de Colombia with a postgraduate degree in pensions and occupational risks of the same university. She has experience in labor and social security litigation, as well as advising clients regarding the applicable law to labor and employment matters. Currently she focuses on the labor practice area of the firm.'
      }
    }
    return {
      name: 'Ligia González',
      position: 'Asociada',
      avatar: ligiaSmall,
      modal: ligiaModal,
      email: 'lgonzalez@malegal.co',
      bio: 'Ligia es abogada de la Universidad Externado de Colombia y especializada en Pensiones y Riesgos Laborales de la misma universidad. Cuenta con experiencia en litigios laborales y de seguridad social, así como asesoría general en la normatividad aplicable al sector laboral. Actualmente se desempeña en el área de litigio laboral de la firma.'
    }
  }
}

export default getMemberInfo
