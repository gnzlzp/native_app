const listInspec = [
  {
    id:1,
    type: 'select',
    question: 'Alineación angular y paralela (aplica en acoples listados)',
    answer: '',
  },
  {
    id:2,
    type: 'select',
    question: 'Aislamiento de cables.',
    answer: '',
  },
  {
    id:3,
    type: 'select',
    question: 'Sistema eléctrico de la bomba (s)',
    answer: '',
  },
  {
    id:4,
    type: 'select',
    question: 'Mangueras y conexiones flexibles',
    answer: '',
  },
  {
    id:5,
    type: 'select',
    question: 'Circuitos impresos sin corrosión',
    answer: '',
  },
  {
    id:6,
    type: 'select',
    question: 'Tuberías y acoples libres de fugas.',
    answer: '',
  },
  {
    id:7,
    type: 'select',
    question: 'Pantallas y tuberías de succión.',
    answer: '',
  }, 
  {
    id:8,
    type: 'select',
    question: 'Objetos extraños y/u obstáculos que dificulten la movilidad en el interior del cuarto.',
    answer: '',
  },
  {
    id:9,
    type: 'select',
    question: 'Switch principal del controlador integrado al motor se encuentre en la posición Automático y los demás en su posición normal?.',
    answer: '',
  },
  {
    id:10,
    type: 'select',
    question: 'Selector del tablero de control jockey se encuentra en Automático?',
    answer: '',
  },
  {
    id:11,
    type: 'select',
    question: 'Inspeccione la condición del agua y su nivel dentro del tanque.',
    answer: '',
  },
  {
    id:12,
    type: 'select',
    question: 'Inspeccionar si el led de alarma por fase invertida y/o perdida está apagado.',
    answer: '',
  },
  {
    id:13,
    type: 'input',
    question: 'Registre las presiones de encendido y apagado del motor en el control eléctrico [psi].',
    answer: {
      pressureOn: '',
      pressureOff: '',
    },
  },
  {
    id:14,
    type: 'input',
    question: 'Registre día de la semana y hora de inicio de la prueba automática (realizar la observación respectiva si la prueba se realiza en un día/hora diferente a la programada).',
    answer: {
      day: '',
      hour: '',
    },
  }
]
export {listInspec};