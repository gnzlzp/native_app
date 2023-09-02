const listInspec = [
  {
    type: 'select',
    question: 'Alineación angular y paralela (aplica en acoples listados)',
    answer: '',
  },
  {
    type: 'select',
    question: 'Aislamiento de cables.',
    answer: '',
  },
  {
    type: 'select',
    question: 'Sistema eléctrico de la bomba (s)',
    answer: '',
  },
  {
    type: 'select',
    question: 'Mangueras y conexiones flexibles',
    answer: '',
  },
  {
    type: 'select',
    question: 'Circuitos impresos sin corrosión',
    answer: '',
  },
  {
    type: 'select',
    question: 'Tuberías y acoples libres de fugas.',
    answer: '',
  },
  {
    type: 'select',
    question: 'Pantallas y tuberías de succión.',
    answer: '',
  }, 
  {
    type: 'select',
    question: 'Objetos extraños y/u obstáculos que dificulten la movilidad en el interior del cuarto.',
    answer: '',
  },
  {
    type: 'select',
    question: 'Switch principal del controlador integrado al motor se encuentre en la posición Automático y los demás en su posición normal?.',
    answer: '',
  },
  {
    type: 'select',
    question: 'Selector del tablero de control jockey se encuentra en Automático?',
    answer: '',
  },
  {
    type: 'select',
    question: 'Inspeccione la condición del agua y su nivel dentro del tanque.',
    answer: '',
  },
  {
    type: 'select',
    question: 'Inspeccionar si el led de alarma por fase invertida y/o perdida está apagado.',
    answer: '',
  },
  {
    type: 'input',
    question: 'Registre las presiones de encendido y apagado del motor en el control eléctrico [psi].',
    answer: {
      pressureOn: '',
      pressureOff: '',
    },
  },
  {
    type: 'input',
    question: 'Registre día de la semana y hora de inicio de la prueba automática (realizar la observación respectiva si la prueba se realiza en un día/hora diferente a la programada).',
    answer: {
      day: '',
      hour: '',
    },
  }
]
export {listInspec};