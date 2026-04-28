export interface AreaItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  benefits: string[];
  applications: string[];
  seoDescription: string;
}

export const areas: AreaItem[] = [
  {
    slug: 'identificacion-de-pacientes',
    title: 'Identificaci\u00f3n de pacientes',
    description: 'Para pacientes adultos, pedi\u00e1tricos y neonatal.',
    image: '/images/inicio/mano-paciente-con-brazalete-de-alerta.webp',
    intro:
      'Soluciones de identificaci\u00f3n hospitalaria dise\u00f1adas para reducir errores, agilizar admisiones y mejorar la trazabilidad del paciente desde su ingreso hasta el alta.',
    benefits: [
      'Brazaletes para pacientes adultos, pedi\u00e1tricos y neonatales.',
      'Materiales resistentes al agua, alcohol y uso continuo.',
      'Impresi\u00f3n clara para nombres, c\u00f3digos de barras y datos cl\u00ednicos.',
      'Opciones compatibles con flujos de hospitalizaci\u00f3n, emergencia y maternidad.',
    ],
    applications: [
      'Hospitales y cl\u00ednicas',
      'Maternidad y neonatolog\u00eda',
      'Emergencia y admisi\u00f3n',
      'Laboratorio y toma de muestras',
    ],
    seoDescription:
      'Brazaletes y soluciones para identificaci\u00f3n segura de pacientes en hospitales, cl\u00ednicas y centros de salud.',
  },
  {
    slug: 'impresoras',
    title: 'Impresoras',
    description: 'Imprime hasta 10 veces m\u00e1s r\u00e1pido tus brazaletes.',
    image: '/images/inicio/impresora-de-brazaletes.webp',
    intro:
      'Impresoras especializadas para brazaletes y etiquetas m\u00e9dicas, preparadas para entornos exigentes donde la velocidad y la legibilidad no pueden fallar.',
    benefits: [
      'Impresi\u00f3n t\u00e9rmica confiable y de alta velocidad.',
      'Compatibilidad con brazaletes hospitalarios y etiquetas adhesivas.',
      'Equipos compactos para estaciones de enfermer\u00eda, admisi\u00f3n y laboratorio.',
      'Menor tiempo de espera en procesos de identificaci\u00f3n y rotulado.',
    ],
    applications: [
      'Admisi\u00f3n de pacientes',
      'Estaciones de enfermer\u00eda',
      'Laboratorios',
      'Farmacias hospitalarias',
    ],
    seoDescription:
      'Impresoras para brazaletes y etiquetas m\u00e9dicas con alto rendimiento para hospitales y cl\u00ednicas.',
  },
  {
    slug: 'vestimenta-para-bioseguridad',
    title: 'Vestimenta para bioseguridad',
    description: 'Uniformes quir\u00fargicos desechables.',
    image: '/images/inicio/doctor-de-vista-lateral-poniendose-una-bata-medica.webp',
    intro:
      'Prendas y elementos de protecci\u00f3n orientados a reforzar protocolos de bioseguridad, cuidar al personal y reducir riesgos de contaminaci\u00f3n cruzada.',
    benefits: [
      'Batas, mandiles y vestimenta descartable para distintos procedimientos.',
      'Materiales pensados para comodidad, movilidad y protecci\u00f3n.',
      'Opciones para quir\u00f3fano, consulta externa y procedimientos cl\u00ednicos.',
      'Suministro alineado con rutinas de control sanitario y prevenci\u00f3n.',
    ],
    applications: [
      'Quir\u00f3fanos',
      'Consultorios y salas de procedimientos',
      'Hospitalizaci\u00f3n',
      'Centros de diagn\u00f3stico',
    ],
    seoDescription:
      'Vestimenta de bioseguridad y uniformes desechables para procedimientos cl\u00ednicos y quir\u00fargicos.',
  },
  {
    slug: 'etiquetado-medico',
    title: 'Etiquetado m\u00e9dico',
    description: 'Etiquetas 100% personalizables con m\u00e1xima adherencia.',
    image: '/images/inicio/inyectable-con-etiqueta.webp',
    intro:
      'Etiquetas m\u00e9dicas para una identificaci\u00f3n precisa de muestras, medicamentos, historias cl\u00ednicas y activos, con excelente adherencia en distintos materiales.',
    benefits: [
      'Etiquetas personalizables seg\u00fan formato, color y contenido.',
      'Adherencia confiable para frascos, tubos, bolsas y superficies cl\u00ednicas.',
      'Lectura n\u00edtida de texto, c\u00f3digos de barras y datos variables.',
      'Aptas para procesos internos de farmacia, laboratorio y trazabilidad.',
    ],
    applications: [
      'Laboratorio cl\u00ednico',
      'Farmacia',
      'Banco de sangre',
      'Almac\u00e9n y trazabilidad',
    ],
    seoDescription:
      'Etiquetas m\u00e9dicas personalizadas para laboratorios, farmacia y trazabilidad hospitalaria.',
  },
  {
    slug: 'software',
    title: 'Software',
    description: 'Sistema para impresi\u00f3n de brazaletes y etiquetas.',
    image: '/images/inicio/doctora-y-enfermera-mirando-monitor-de-computadora-1.webp',
    intro:
      'Software orientado a la emisi\u00f3n de brazaletes y etiquetas, integrando datos del paciente para reducir errores manuales y estandarizar procesos.',
    benefits: [
      'Dise\u00f1o e impresi\u00f3n de brazaletes y etiquetas desde una sola plataforma.',
      'Configuraci\u00f3n adaptable a diferentes flujos hospitalarios.',
      'Reducci\u00f3n de digitaci\u00f3n manual y mejor consistencia de la informaci\u00f3n.',
      'Soporte para procesos de identificaci\u00f3n, rotulado y control.',
    ],
    applications: [
      'Admisi\u00f3n y recepci\u00f3n',
      'Hospitalizaci\u00f3n',
      'Laboratorio',
      'Farmacia y dispensaci\u00f3n',
    ],
    seoDescription:
      'Software para imprimir brazaletes y etiquetas m\u00e9dicas con procesos de identificaci\u00f3n m\u00e1s seguros.',
  },
];
