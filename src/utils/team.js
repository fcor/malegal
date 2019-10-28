import carolinaSmall from '../assets/img/carolina_small.jpg'
import carolinaModal from '../assets/img/carolina_modal.jpg'
import sebastianSmall from '../assets/img/sebastian_small.jpg'
import sebastianModal from '../assets/img/sebastian_modal.jpg'
import edgarSmall from '../assets/img/edgar_small.jpg'
import edgarModal from '../assets/img/edgar_modal.jpg'
import paulaSmall from '../assets/img/paula_small.jpg'
import paulaModal from '../assets/img/paula_modal.jpg'
import marianaSmall from '../assets/img/mariana_small.jpg'
import marianaModal from '../assets/img/mariana_modal.jpg'


const getMemberInfo = (name, lang) => {
  if (name === 'Maria') {
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
  } else if (name === 'Paula') {
    if (lang === 'en') {
      return {
        name: 'Paula Knudson',
        position: 'Associate',
        avatar: paulaSmall,
        modal: paulaModal,
        email: 'pknudson@malegal.co',
        bio: 'Paula is a lawyer from Universidad del Rosario who has experience as legal advisor to local and foreign clients in transactions related to financial law and capital markets, especially in project finance, corporate finance, security packages and others. Prior to joining the Firm, she worked at a top tier law firm and currently she is a member of the financial and banking practice area.'
      }
    }
    return {
      name: 'Paula Knudson',
      position: 'Asociada',
      avatar: paulaSmall,
      modal: paulaModal,
      email: 'pknudson@malegal.co',
      bio: 'Paula es abogada de la Universidad del Rosario con experiencia en asesoría legal de clientes nacionales e internacionales en transacciones relacionadas con Derecho Financiero y Mercado de Capitales, principalmente en la financiación de proyectos 4G, proyección de créditos corporativos, esquemas de garantías, entre otros. Antes de su vinculación a la Firma, Paula trabajó en una firma de abogados de primer nivel y actualmente se desempeña en el área de Derecho Financiero y Mercado de Capitales.'
    }
  } else if (name === 'Mariana') {
    if (lang === 'en') {
      return {
        name: 'Mariana Fonnegra',
        position: 'Associate',
        avatar: marianaSmall,
        modal: marianaModal,
        email: 'mfonnegra@malegal.co',
        bio: 'Mariana is paralegal in the Banking and Corporate Law practice areas of the Firm. Currently, she is a law student from Universidad del Rosario with emphasis in commercial law. Previously Mariana worked at a local firm in the commercial law practice area and due to her academic excellence, she has been an academic assistant of multiple professors.'
      }
    }
    return {
      name: 'Mariana Fonnegra',
      position: 'Asociada',
      avatar: marianaSmall,
      modal: marianaModal,
      email: 'mfonnegra@malegal.co',
      bio: 'Mariana es paralegal en las áreas de Derecho Financiero y Derecho Corporativo de la Firma. Actualmente, es estudiante de Jurisprudencia de la Universidad del Rosario con énfasis en derecho comercial. Anteriormente, Mariana trabajó en una firma de abogados local en el área de derecho comercial y por su excelencia académica, se ha desempeñado como monitora académica de múltiples profesores.'
    }
  }
}

export default getMemberInfo
