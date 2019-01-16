const areasEs = [
  {
    title: 'Derecho Corporativo',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin.',
    bullets: [
      'Constitución de sociedades',
      'Estructuración y revisión de contratos',
      'Trámites e impulso de procesos ante autoridades',
      'Asesoría en el diseño de estatutos y normatividad interna de la sociedad',
      'Diseño de la estructura de gobierno societario',
      'Acciones de responsabilidad contra administradores',
      'Secretaría general',
      'Solución de Controversias',
      'Consultoría',
    ]
  },
  {
    title: 'Derecho Financiero y del Mercado de Valores',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin.',
    bullets: [
      'Protección al consumidor financiero',
      'Constitución de entidades',
      'Estructuración de fondos de inversión',
      'Estructuración y revisión de contratos',
      'Due Diligence',
      'Compliance y relación con las autoridades de vigilancia, inspección y control',
      'Gobierno corporativo',
      'Negociación de Schedules de ISDAS, Credit Support Annexes, bilateral amendments y documentación para interponer a la CRCC',
      'Consultoría en la adhesión de protocolos de ISDA',
      'Estructuración y consultoría de la regulación y contabilidad de operaciones con derivados financieros',
      'Estructuración y consultoría de la regulación de productos estructurados',
      'Nuevos mecanismos para la prestación de servicios financieros e IA para trading y asesoría',
      'Constitución de garantías mobiliarias e inmobiliarias',
      'Financiación de infraestructura',
      'Trade Finance',
      'Acciones de responsabilidad contra administradores',
      'Trámites y asesorías con relación a titularizaciones, emisiones y ofertas públicas de adquisición',
      'Secretaría general',
      'Solución de Controversias',
      'Consultoría',
    ]
  },
  {
    title: 'Derecho Laboral y Seguridad Social',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin.',
    bullets: [
      'Atención de procesos judiciales ante la justicia ordinaria laboral',
      'Consultoría',
    ]
  },
]

const areasEn = [
  {
    title: 'Corporate, Business & Transactions',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin.',
    bullets: [
      'Creation of partnerships and corporations',
      'Foreign exchange requirements',
      'Corporate governance',
      'Management of affairs in front of local authorities',
      'Negotiation and drafting of agreements',
      'Directors’ liability',
      'Dispute resolution',
      'Advice',
    ]
  },
  {
    title: 'Financial, Banking, Private Equity, FinTech, Derivatives & Structured Products',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin.',
    bullets: [
      'Customer protection',
      'Incorporation of financial entities',
      'Structuring of Investment Funds (Fondos de Inversión Colectiva – FICs (local equivalent of Mutual Funds and UCITS), Fondos de Capital Privado – FCPs (local equivalent of Private Equity Funds), Fundos Bursátiles (local equivalent of Exchange Traded Funds), and Hedge Funds)',
      'Negotiation and drafting of loans, credit facilities and other agreements',
      'Due Diligence',
      'Compliance',
      'Corporate governance',
      'Management of affairs in front of local authorities',
      'Negotiation of ISDA Schedules, Credit Support Annexes, bilateral amendments, and of agreements with the local central counterparty',
      'Advice on ISDA’s protocols adherence',
      'Structuring and advising on financial derivatives regulation and accounting',
      'Structuring and advising on structured products regulation',
      'Disruptive mechanisms to provide financial services and AI for trading and financial advice',
      'Public offerings',
      'Constitution of security interests',
      'Project Finance',
      'Trade Finance',
      'Securitizations',
      'Directors’ liability',
      'Dispute resolution',
      'Advice',
    ]
  },
  {
    title: 'Social Security & Labor',
    text: 'Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry candy. Gummies jelly-o croissant cheesecake topping dragée bear claw muffin.',
    bullets: [
      'Dispute resolution',
      'Advice',
    ]
  },
]

const getAreas = (lang) => {
  if (lang === 'es') {
    return areasEs
  }
  return areasEn
}

export default getAreas