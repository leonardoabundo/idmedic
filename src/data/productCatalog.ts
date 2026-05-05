export interface ProductSubcategory {
  slug: string;
  label: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  listingTitle: string;
  infoTitle: string;
  infoDescription: string;
  featuredProducts: Array<{
    title: string;
    meta: string;
  }>;
}

export interface ProductCategory {
  slug: string;
  label: string;
  href: string;
  description: string;
  promo: {
    image: string;
    href: string;
    label: string;
  };
  subcategories: ProductSubcategory[];
}

export const productCatalog: ProductCategory[] = [
  {
    slug: 'brazaletes',
    label: 'IDENTIFICACIÓN Y TRAZABILIDAD',
    href: '/productos/brazaletes',
    description: 'Soluciones de identificacion termica para pacientes adultos, pediatricos y neonatales.',
    promo: {
      image: '/images/inicio/header/menu-bra.webp',
      href: '/productos/brazaletes',
      label: 'Explorar brazaletes',
    },
    subcategories: [
      {
        slug: 'adulto-pediatrico',
        label: 'Brazaletes adulto - pediatrico',
        shortDescription: 'Linea para pacientes adultos y pediatricos con impresion termica y lectura clara.',
        heroTitle: 'Brazaletes adulto - pediatrico',
        heroDescription:
          'Explore nuestras innovadoras ofertas de productos y solicite una muestra para encontrar la solucion adecuada para usted.',
        listingTitle: 'Brazalete de identificación vinyl',
        infoTitle: 'Descubre como implementar nuestras soluciones',
        infoDescription:
          'Explore nuestras innovadoras ofertas de productos y solicite una muestra para encontrar la solucion adecuada para usted. Nuestros productos ya estan disponibles para su compra directamente. Explore los catalogos para hacer su pedido hoy mismo.',
        featuredProducts: [
          {
            title: 'Brazalete De Alertas Para Adulto',
            meta: 'Termico, Adulto, Brazalete de Identificacion',
          },
          {
            title: 'Brazalete De Identificacion Para Adultos',
            meta: 'Termico, Adulto, Brazalete de Identificacion',
          },
          {
            title: 'Brazalete Termico Infanthand',
            meta: 'Termico, Neonatal, Brazalete de Identificacion',
          },
        ],
      },
      {
        slug: 'recien-nacidos',
        label: 'Brazaletes recien nacidos',
        shortDescription: 'Formatos neonatales con tamano adecuado y superficie lista para impresion.',
        heroTitle: 'Brazaletes para recien nacidos',
        heroDescription:
          'Soluciones para areas neonatales con brazaletes suaves, seguros y preparados para procesos de identificacion hospitalaria.',
        listingTitle: 'Modelos para neonatologia',
        infoTitle: 'Implementacion para areas maternales',
        infoDescription:
          'Esta categoria esta preparada para crecer con nuevos modelos, fichas y variantes enfocadas en maternidad, neonatologia y seguimiento neonatal.',
        featuredProducts: [
          {
            title: 'Brazalete Neonatal Termico',
            meta: 'Termico, Neonatal, Identificacion',
          },
          {
            title: 'Brazalete Materno Infantil',
            meta: 'Seguridad, Binomio, Identificacion',
          },
          {
            title: 'Brazalete Suave Para Cuna',
            meta: 'Neonatal, Suave, Impresion termica',
          },
        ],
      },
      {
        slug: 'alerta-especial',
        label: 'Brazaletes de alerta especial',
        shortDescription: 'Pulseras para alertas visuales y clasificacion rapida dentro del entorno clinico.',
        heroTitle: 'Brazaletes de alerta especial',
        heroDescription:
          'Productos pensados para alertas clinicas, restricciones y codificacion por color dentro del flujo hospitalario.',
        listingTitle: 'Soluciones de alerta visual',
        infoTitle: 'Estandariza alertas dentro del hospital',
        infoDescription:
          'La estructura de esta subcategoria queda preparada para mostrar lineas por color, uso clinico y protocolos especiales.',
        featuredProducts: [
          {
            title: 'Brazalete De Alerta Roja',
            meta: 'Alerta, Adulto, Seguridad',
          },
          {
            title: 'Brazalete De Riesgo Clinico',
            meta: 'Visual, Paciente, Clasificacion',
          },
          {
            title: 'Brazalete De Restriccion',
            meta: 'Control, Alerta, Identificacion',
          },
        ],
      },
    ],
  },
  {
    slug: 'etiquetas-e-impresoras',
    label: 'OSTOMIA Y ACCESORIOS',
    href: '/productos/etiquetas-e-impresoras',
    description: 'Categorias para etiquetas medicas, equipos termicos y consumibles de impresion.',
    promo: {
      image: '/images/inicio/header/menu-impre.webp',
      href: '/productos/etiquetas-e-impresoras',
      label: 'Ver etiquetas e impresoras',
    },
    subcategories: [
      {
        slug: 'etiquetas-medicas-adhesivas',
        label: 'Etiquetas medicas adhesivas',
        shortDescription: 'Etiquetas listas para laboratorio, farmacia y trazabilidad hospitalaria.',
        heroTitle: 'Etiquetas medicas adhesivas',
        heroDescription: 'Subcategoria preparada para organizar etiquetas por uso, formato y compatibilidad.',
        listingTitle: 'Lineas de etiquetas',
        infoTitle: 'Ordena consumibles por aplicacion',
        infoDescription: 'Esta subcategoria queda lista para crecer con fichas de etiquetas y variantes de materiales.',
        featuredProducts: [
          { title: 'Etiqueta Adhesiva Clinica', meta: 'Adhesiva, Laboratorio, Trazabilidad' },
          { title: 'Etiqueta Para Muestras', meta: 'Termica, Tubos, Identificacion' },
          { title: 'Etiqueta Para Farmacia', meta: 'Hospital, Adhesiva, Registro' },
        ],
      },
      {
        slug: 'impresoras-termicas',
        label: 'Impresoras termicas',
        shortDescription: 'Equipos para impresion rapida de brazaletes y etiquetas.',
        heroTitle: 'Impresoras termicas',
        heroDescription: 'Subcategoria pensada para equipos de admision, enfermeria y laboratorio.',
        listingTitle: 'Equipos de impresion',
        infoTitle: 'Integra hardware al flujo hospitalario',
        infoDescription: 'Esta subcategoria queda lista para clasificar impresoras por formato, volumen y compatibilidad.',
        featuredProducts: [
          { title: 'Impresora Compacta De Brazaletes', meta: 'Termica, Desktop, Salud' },
          { title: 'Impresora Para Etiquetas', meta: 'Adhesivas, Clinica, Rapida' },
          { title: 'Impresora De Alto Volumen', meta: 'Termica, Produccion, Hospital' },
        ],
      },
      {
        slug: 'consumibles-para-impresion',
        label: 'Consumibles para impresion',
        shortDescription: 'Rollos, ribbons y materiales para mantener continuidad operativa.',
        heroTitle: 'Consumibles para impresion',
        heroDescription: 'Categoria orientada a stock, continuidad y compatibilidad de impresoras hospitalarias.',
        listingTitle: 'Consumibles disponibles',
        infoTitle: 'Mantiene operativa la impresion',
        infoDescription: 'Esta subcategoria queda lista para listar insumos por equipo, medida y uso.',
        featuredProducts: [
          { title: 'Rollo Para Etiquetas', meta: 'Consumible, Adhesivo, Termico' },
          { title: 'Ribbon De Impresion', meta: 'Transferencia, Salud, Continuidad' },
          { title: 'Kit De Limpieza', meta: 'Mantenimiento, Equipo, Impresora' },
        ],
      },
    ],
  },
  {
    slug: 'bolsa-de-ostomia',
    label: 'PROTECCIÓN & BIOSEGURIDAD',
    href: '/productos/bolsa-de-ostomia',
    description: 'Línea de soluciones para el manejo y cuidado de ostomías.',
    promo: {
      image: '/images/inicio/header/menu-bolsa.webp',
      href: '/productos/bolsa-de-ostomia',
      label: 'Explorar bolsa de ostomía',
    },
    subcategories: [
      {
        slug: 'bolsa-de-ostomia',
        label: 'Bolsa de ostomía',
        shortDescription: 'Soluciones para el manejo seguro y cómodo de ostomías.',
        heroTitle: 'Bolsa de ostomía',
        heroDescription: 'Categoría preparada para organizar bolsas de ostomía por tipo de uso, sistema y confort.',
        listingTitle: 'Bolsa de ostomía',
        infoTitle: 'Organiza referencias por sistema de uso',
        infoDescription: 'Estructura lista para crecer con fichas técnicas, tamaños, sistemas de una o dos piezas y variantes.',
        featuredProducts: [
          { title: 'Bolsa de ostomía estándar', meta: 'Cuidado, Confort, Sistema' },
          { title: 'Bolsa de ostomía flexible', meta: 'Uso diario, Ajuste, Salud' },
          { title: 'Bolsa de ostomía con barrera', meta: 'Seguridad, Cuidado, Ostomía' },
        ],
      },
      {
        slug: 'bolsa-de-urostomia',
        label: 'Bolsa de urostomía',
        shortDescription: 'Bolsas pensadas para sistemas de urostomía y manejo continuo.',
        heroTitle: 'Bolsa de urostomía',
        heroDescription: 'Subcategoría orientada a soluciones para recolección segura y cómoda en pacientes con urostomía.',
        listingTitle: 'Bolsa de urostomía',
        infoTitle: 'Clasifica por drenaje y sistema',
        infoDescription: 'Queda lista para ordenar por tipo de válvula, capacidad, drenaje y adaptación clínica.',
        featuredProducts: [
          { title: 'Bolsa de urostomía con drenaje', meta: 'Urostomía, Seguridad, Sistema' },
          { title: 'Bolsa de urostomía nocturna', meta: 'Capacidad, Drenaje, Cuidado' },
          { title: 'Bolsa de urostomía flexible', meta: 'Confort, Adaptación, Salud' },
        ],
      },
      {
        slug: 'accesorios',
        label: 'Accesorios',
        shortDescription: 'Complementos para mejorar el cuidado, fijación y uso diario.',
        heroTitle: 'Accesorios',
        heroDescription: 'Subcategoría ordenada para elementos complementarios del manejo de ostomías.',
        listingTitle: 'Accesorios',
        infoTitle: 'Completa el sistema de cuidado',
        infoDescription: 'Lista para mostrar accesorios, barreras, fijaciones, protectores y complementos.',
        featuredProducts: [
          { title: 'Barrera protectora', meta: 'Accesorio, Cuidado, Ostomía' },
          { title: 'Cinturón de soporte', meta: 'Ajuste, Seguridad, Complemento' },
          { title: 'Set de cuidado diario', meta: 'Limpieza, Accesorios, Salud' },
        ],
      },
    ],
  },
  {
    slug: 'vestuarios-medicos',
    label: 'MANEJO DE RESIDUOS BIOLÓGICOS',
    href: '/productos/vestuarios-medicos',
    description: 'Uniformes y vestuario clinico para instituciones de salud.',
    promo: {
      image: '/images/inicio/header/menu-ropa.webp',
      href: '/productos/vestuarios-medicos',
      label: 'Conocer vestuarios medicos',
    },
    subcategories: [
      {
        slug: 'batas-y-mandiles-descartables',
        label: 'Batas & mandiles descartables',
        shortDescription: 'Prendas descartables para cobertura y protección del personal.',
        heroTitle: 'Batas & mandiles descartables',
        heroDescription: 'Subcategoría preparada para organizar batas y mandiles por uso, cobertura y tipo de material.',
        listingTitle: 'Batas & mandiles descartables',
        infoTitle: 'Ordena vestuario descartable por aplicación',
        infoDescription: 'Preparada para mostrar modelos por tipo de barrera, manga, cierre y nivel de protección.',
        featuredProducts: [
          { title: 'Mandil descartable de procedimiento', meta: 'Descartable, Protección, Clínico' },
          { title: 'Bata descartable manga larga', meta: 'Cobertura, Salud, Desechable' },
          { title: 'Mandil con amarre posterior', meta: 'Hospital, Barrera, Vestuario' },
        ],
      },
      {
        slug: 'kit-descartable',
        label: 'Kit descartable',
        shortDescription: 'Kits listos para procedimientos y atención clínica.',
        heroTitle: 'Kit descartable',
        heroDescription: 'Subcategoría pensada para kits descartables armados según tipo de atención o procedimiento.',
        listingTitle: 'Kit descartable',
        infoTitle: 'Clasifica kits por escenario de uso',
        infoDescription: 'Lista para ordenar sets completos por especialidad, contenido y tipo de protección.',
        featuredProducts: [
          { title: 'Kit descartable de atención', meta: 'Set, Procedimiento, Desechable' },
          { title: 'Kit clínico básico', meta: 'Cobertura, Salud, Paquete' },
          { title: 'Kit de barrera hospitalaria', meta: 'Protección, Completo, Clínica' },
        ],
      },
      {
        slug: 'mascarillas-quirurgicas',
        label: 'Mascarillas quirúrgicas',
        shortDescription: 'Mascarillas de uso clínico para protección diaria y procedimientos.',
        heroTitle: 'Mascarillas quirúrgicas',
        heroDescription: 'Subcategoría lista para clasificar mascarillas por capa, ajuste y nivel de filtración.',
        listingTitle: 'Mascarillas quirúrgicas',
        infoTitle: 'Ordena por nivel de protección',
        infoDescription: 'Preparada para mostrar variantes por material, color, elástico y uso institucional.',
        featuredProducts: [
          { title: 'Mascarilla quirúrgica 3 pliegues', meta: 'Protección, Salud, Desechable' },
          { title: 'Mascarilla con elástico', meta: 'Clínica, Barrera, Diario' },
          { title: 'Mascarilla de uso institucional', meta: 'Hospital, Cobertura, Seguridad' },
        ],
      },
      {
        slug: 'gorros-descartables',
        label: 'Gorros descartables',
        shortDescription: 'Coberturas descartables para áreas clínicas y procedimientos.',
        heroTitle: 'Gorros descartables',
        heroDescription: 'Subcategoría preparada para organizar gorros por forma, ajuste y material.',
        listingTitle: 'Gorros descartables',
        infoTitle: 'Ordena por cobertura y ajuste',
        infoDescription: 'Lista para clasificar productos por tipo de uso, textura y presentación.',
        featuredProducts: [
          { title: 'Gorro tipo acordeón', meta: 'Desechable, Cobertura, Clínico' },
          { title: 'Gorro elástico hospitalario', meta: 'Protección, Área limpia, Salud' },
          { title: 'Gorro de procedimiento', meta: 'Barrera, Clínica, Uso diario' },
        ],
      },
      {
        slug: 'cubrecalzado',
        label: 'Cubrecalzado',
        shortDescription: 'Protección descartable para calzado en ambientes controlados.',
        heroTitle: 'Cubrecalzado',
        heroDescription: 'Subcategoría lista para mostrar cubrecalzado por material, agarre y resistencia.',
        listingTitle: 'Cubrecalzado',
        infoTitle: 'Clasifica por tránsito y protección',
        infoDescription: 'Preparada para ordenar productos por tipo de suela, gramaje y escenario clínico.',
        featuredProducts: [
          { title: 'Cubrecalzado clínico básico', meta: 'Desechable, Suela, Protección' },
          { title: 'Cubrecalzado antideslizante', meta: 'Hospital, Seguridad, Tránsito' },
          { title: 'Cubrecalzado reforzado', meta: 'Barreras, Área crítica, Cobertura' },
        ],
      },
    ],
  },
];

export function getProductCategory(categorySlug: string) {
  return productCatalog.find((category) => category.slug === categorySlug);
}

export function getProductSubcategory(categorySlug: string, subcategorySlug: string) {
  return getProductCategory(categorySlug)?.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);
}
