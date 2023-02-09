export default {
  global: {
    componenteFormativo:
      'Sanidad y reproducción animal en sistemas agroecológicos',
    descripcionCurso:
      'Se abordarán las labores de manejo para el bienestar animal, según la especie y el tipo de ganado, incluyendo técnicas de inmovilización, sin causar daño a los animales al momento del transporte o aplicación de tratamientos en procesos productivos y reproductivos, teniendo en cuenta la anatomía, medicamento, prácticas de mejoramiento genético y métodos adecuados de monta, ya sea directa o involucrando la tecnología.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/circulo-img-principal.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/circ-girat-decor1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Labores de manejo animal por especie y etapa productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación del animal',
            hash: 'identificacion-del-animal',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sujeción e inmovilización de animales',
            hash: 'sujecion-e-inmovilizacion-de-animales',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Transporte y técnicas de movilización',
            hash: 'transporte-y-tecnicas-de-movilizacion',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Anatomía de las especies pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Enfermedades de las especies pecuarias',
            hash: 'enfermedades-de-las-especies-pecuarias',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan sanitario',
            hash: 'plan-sanitario',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tratamientos convencionales, medicamentos, equipos e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Medicina etnoveterinaria',
            hash: 'medicina-etnoveterinaria',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Plantas medicinales',
            hash: 'plantas-medicinales',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Anatomía del aparato reproductivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Ciclo estral',
            hash: 'ciclo-estral',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Métodos y técnicas de detección del ciclo estral',
            hash: 'metodos-y-tecnicas-de-deteccion-del-ciclo-estral',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Métodos de estimulación del celo',
            hash: 'metodos-de-estimulacion-del-celo',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Inseminación artificial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Monta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Registros reproductivos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Anatomía del aparato reproductivo',
      referencia:
        'Guáqueta, H. (2009). Ciclo estral: fisiología básica y estrategias para mejorar la detección de celos. <em>Revista Facultad de Medicina Veterinaria y de Zootécnica</em>, 56(3), p.163-183. ',
      tipo: 'Otro',
      link: 'https://www.redalyc.org/pdf/4076/407639221003.pdf ',
    },
    {
      tema: 'Tratamientos convencionales, medicamentos, equipos e insumos',
      referencia:
        'Rodríguez, O. (2018). <em>Enfermedades y uso de plantas medicinales en animales. Secretaría de medio ambiente y recursos naturales de México.</em>',
      tipo: 'Otro',
      link:
        'https://biblioteca.semarnat.gob.mx/janium/Documentos/Ciga/libros2018/CD006478.pdf ',
    },
    {
      tema: 'Anatomía del aparato reproductivo',
      referencia:
        'Dirección Regional Agraria Lima Callao. (2003). <em>Manual de inseminación artificial y manejo reproductivo del ganado vacuno.</em> [DPA]. Ministerio de Agricultura de Perú. ',
      tipo: 'Otro',
      link: 'https://www.uv.mx/veracruz/fmvz/files/2019/03/maniatiart.pdf ',
    },
    {
      tema: 'Anatomía del aparato reproductivo',
      referencia:
        'Gasque, R. (2016). <em>Reproducción bovina.</em> Producción animal. ',
      tipo: 'Otro',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/inseminacion_artificial/245-Reproduccion_bovina.pdf ',
    },
    {
      tema: 'Anatomía del aparato reproductivo',
      referencia:
        'Marín, G. (2011). <em>Sistemas de producción animal I.</em> Universidad de Caldas.',
      tipo: 'Otro',
      link:
        'https://www.uaeh.edu.mx/investigacion/productos/4782/sistemas_produccion_animal_i.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Andrógenos',
      significado:
        'hormonas que se encargan del desarrollo de las características sexuales masculinas.',
    },
    {
      termino: 'Ciclo estral',
      significado:
        'procesos fisiológicos producidos en los ovarios de las hembras.',
    },
    {
      termino: 'Cuerpo lúteo',
      significado: 'cuerpo amarillo que se forma después de la ovulación.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'cualquier trastorno que cause deterioro en la salud de los organismos.',
    },
    {
      termino: 'Estrógenos',
      significado:
        'hormonas femeninas encargadas de las funciones reproductivas.',
    },
    {
      termino: 'Espermatozoide',
      significado:
        'se forma en los testículos, es la célula de reproducción masculina.',
    },
    {
      termino: 'Fármaco',
      significado: 'sustancia usada para prevenir o curar enfermedades.',
    },
    {
      termino: 'Folículo',
      significado: 'saco ubicado en el ovario que contiene el óvulo inmaduro.',
    },
    {
      termino: 'Óvulo',
      significado: 'se forma en el ovario, es la célula reproductiva femenina.',
    },
    {
      termino: 'Progesterona',
      significado:
        'hormona que se produce en el ovario, se encarga de mantener el óvulo fertilizado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Diaz, G. (2020). <em>Cuidados necesarios con la técnica de inseminación artificial.</em> BM Editores.',
      link:
        'https://bmeditores.mx/ganaderia/cuidados-necesarios-con-la-tecnica-de-inseminacion-artificial/',
    },
    {
      referencia:
        'Gary, F., Clauss, M., Bonbon, E., & Myers, L. (2021). <em>Metodología y buena gestión de emergencias: elementos fundamentales guía de preparación para emergencias zoosanitarias.</em> FAO.',
      link: 'https://www.fao.org/3/cb3833es/cb3833es.pdf',
    },
    {
      referencia:
        'Urquieta, D. (2019). <em>Efecto de la proteína sobre la calidad de semen en toros (bos taurus) en la estación experimental de choquenaira.</em> [Tesis de pregrado Universidad Mayor de San Andrés]. Repositorio Institucional UMSA.',
      link:
        'https://repositorio.umsa.bo/bitstream/handle/123456789/23467/T-2711.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Villa, N. (2018). Ganadera, arme el botiquín para la finca. <em>La Patria.</em>',
      link:
        'https://www.lapatria.com/tenga-en-cuenta/arme-el-botiquin-para-finca-una-ganadera-425781',
    },
    {
      referencia:
        'Villa-Forte, A. (2022). <em>Sistemas orgánicos.</em> MsdManuals.',
      link:
        'https://www.msdmanuals.com/es/hogar/fundamentos/el-cuerpo-humano/sistemas-org%C3%A1nicos',
    },
    {
      referencia:
        'Voogd, E. (2018). <em>Un vistazo a las técnicas de inmovilización eléctrica de cerdos.</em> De frente al campo.',
      link:
        'https://www.defrentealcampo.com.ar/un-vistazo-a-las-tecnicas-de-inmovilizacion-electrica-de-cerdos/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
