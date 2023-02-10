<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Labores de manejo animal por especie y etapa productiva

    
    .row.container.justify-content-around.align-items-align-items-center
      
        p El manejo reproductivo se relaciona, principalmente, con las condiciones del suelo, el clima y la disponibilidad de la mano de obra. A continuación, se describe en el manejo de bovinos y cerdos, según sus características productivas:

        AcordionA(tipo="a" clase-tarjeta="tarjeta fondo-ext-acord-tema1")

          .row(titulo="Manejo de los bovinos de leche según etapa productiva")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img1-acord-tema1.png', alt='Texto que describa la imagen').img-acord-tema1
                //figcaption Leyenda de la imagen
            
            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema1 Se pueden instalar animales en sistemas tradicionales,  permitiendo que los ejemplares tomen su alimento a libre disposición. Debido a la degradación del suelo, por sobrepastoreo o por sistemas intensivos o tecnificados, se requiere aumentar en el gasto en la construcción de instalaciones, lo que da resultados positivos y aumenta los parámetros de producción. Animales cómodos suministran alimentos de calidad. Además, se facilita el manejo y se evita la degradación de pastos.
          

          
          .row(titulo="Manejo del bovino de carne según su etapa productiva")
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img2-acord-tema1.png', alt='Texto que describa la imagen').img-acord-tema1
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema1 Producir carne es aprovechar, en su totalidad, el crecimiento de los animales al usarlos como alimento humano. Para sacrificar los animales, se debe cumplir con algunos parámetros específicos, por ejemplo, la edad o la cantidad y distribución de grasa. Por esto, al momento de elegir los ejemplares destinados para este propósito, es necesario tener en cuenta la raza, los índices de ganancia de peso, la capacidad para convertir el alimento y el rendimiento en canal.
       

          .row(titulo="Manejo de cerdos según etapa productiva")                  
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img3-acord-tema1.png', alt='Texto que describa la imagen').img-acord-tema1
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0

              p.txt-acord-tema1 Por ejemplo, cuando los cerdos se encuentran alimentados adecuadamente, sus rendimientos y proceso de levante son más eficientes, por lo que la rentabilidad es mayor.
              p.txt-acord-tema1 En el manejo de los cerdos es fundamental la alimentación y el cuidado del lugar donde se encuentran los animales, teniendo en cuenta, especialmente, la etapa de cría. Este servicio debe ser considerado como una ‘siembra’ que, de realizarse de forma correcta, permitirá una excelente cosecha de lechones nacidos vivos.
        br
        p.txt-inf-tarj1-tema1 Para el cuidado de los animales, se deben realizar algunas acciones que se ejecutan cuidadosa y correctamente, asegurando comodidad en el animal y evitando la acumulación de estrés. Las cinco libertades se describen de la siguiente manera:
 
    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        h3 Cinco libertades del bienestar animal
        
        p Cinco libertades del bienestar animal para mejorar la productividad en los entables pecuarios, manteniendo las condiciones para el bienestar de los animales.

        .row 

          .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 1
              br
              span <em>Libertades del bienestar animal</em>
          
          figure.tarjeta(style="background-color: #f8f6ed").p-3
              img(src='@/assets/curso/temas/img-5-libertades-bienestar-animal.png', alt='Texto que describa la imagen').img-5-libertades-bienestar-animal
            
          

    br
    br

    .row.container.justify-content-around.align-items-align-items-center
        
        h3.mb-4 Manejo de animales por etapa productiva
        p Para profundizar acerca de manejo animal por etapa reproductiva, consulte los siguientes anexos los cuales tienen información detallada sobre el manejo según cada etapa de desarrollo:

        .row.bloque-tarj1-man-anim-tema1
          .col-lg-10.fondo-tarj1-man-anim-tema1.tarjeta.p-4
            .row 
              .col-lg-2
                    img(src='@/assets/curso/temas/img-etap-prod-tema1.png', alt='Texto que describa la imagen').img1-man-anim-tema1
              
              .col-lg-8

                  p.txt-tarj1-man-anim-tema1 Manejo de ternera, novilla y vaca lactante

              .col-lg-2
                .boton-tarj1-man-anim-tema1
                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_3_ etapas_productivas_leche_compressed.pdf')" target="_blank")
                    .anexo__texto
                    span Ver enlace
                    i.fas.fa-chain
    br

    .row.container.justify-content-around.align-items-align-items-center
        
        .row.bloque-tarj1-man-anim-tema1
          .col-lg-10.fondo-tarj1-man-anim-tema1.tarjeta.p-4
            .row 
              .col-lg-2
                    img(src='@/assets/curso/temas/img2-etap-prod-tema1.png', alt='Texto que describa la imagen').img2-man-anim-tema1
              
              .col-lg-8

                  p.txt-tarj1-man-anim-tema1 Manejo de bovinos para producción de carne

              .col-lg-2
                .boton-tarj1-man-anim-tema1
                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_4_etapa_productiva_carne_compressed.pdf')" target="_blank")
                    .anexo__texto
                    span Ver enlace
                    i.fas.fa-chain
    
    br
    
    .row.container.justify-content-around.align-items-align-items-center

        .row.bloque-tarj1-man-anim-tema1
          .col-lg-10.fondo-tarj1-man-anim-tema1.tarjeta.p-4
            .row 
              .col-lg-2
                    img(src='@/assets/curso/temas/img3-etap-prod-tema1.png', alt='Texto que describa la imagen').img3-man-anim-tema1
              
              .col-lg-8

                  p.txt-tarj1-man-anim-tema1 Manejo de cerdos según su etapa productiva

              .col-lg-2
                .boton-tarj1-man-anim-tema1
                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_5_ etapa_productiva_cerdos_compressed.pdf')" target="_blank")
                    .anexo__texto
                    span Ver enlace
                    i.fas.fa-chain
                    
          
    
    br
    br
    br

    separador
    
    br

    .row.container.justify-content-around.align-items-align-items-center

        #identificacion-del-animal
        .titulo-segundo.color-secundario
          h2 1.1  Identificación del animal

        .row
          .col-lg-4

              figure
                img(data-aos="fade-right")(src='@/assets/curso/temas/img-id-animal-tema1.png', alt='Texto que describa la imagen').img-id-animal-tema1
     

          .col-lg-8.container
              .bloque-color-ident-animal-tema1
              p.txt-id-animal-tema1 La marcación o identificación de los animales, tiene el objetivo de llevar un control adecuado, al facilitar su identificación en los registros de productividad y sanidad; la siguiente información describe este proceso:
                br
                br
                |Como toda actividad económica, la producción animal es una empresa que busca rentabilidad y aumento en los índices de productividad. Así, asignar un número individual a cada uno de los ejemplares, facilita llevar registros y, de esta manera, se controlan parámetros productivos y reproductivos y se analizan aspectos económicos, lo que permite descartar animales menos eficaces. A continuación, se enumeran los sistemas de identificación más usados.
        
        .row.container.bloque-slider-tema1
            
            figure
                img(src='@/assets/curso/temas/img-fondo-slider-tema1.png', alt='Texto que describa la imagen').img-fondo-slider-tema1
     
            .tarjeta.p-4
                SlyderA(tipo="b")

                  .row.justify-content-center.align-items-center.my-lg-4
                    .col-md-6.mb-4.mb-md-0
                      h4.txt-slider-tema1 Herrado
                      p.txt-slider-tema1 Es el método más antiguo para la identificación de animales, se hace por medio de marcas que pueden incluir letras, números, escudos o logos de la finca, su postura se realiza en las extremidades para evitar la pérdida de valor comercial.
                      p.txt-slider-tema1 Esta práctica es común en ejemplares especializados en la producción de carne y consiste en usar un hierro, que se expone a temperaturas específicas, ya sea frío o caliente, que, posteriormente, se plasma sobre la piel de la especie pecuaria.


                    .col-md-6
                      figure
                        img(src='@/assets/curso/temas/img1-slider-tema1.png', alt='Texto que describa la imagen').img-slider-tema1
                        //figcaption Leyenda de la imagen

                  .row.justify-content-center.align-items-center.my-lg-4
                  
                    .col-md-6.mb-4.mb-md-0
                        h4.txt-slider-tema1 Tatuaje
                        p.txt-slider-tema1 Marcación de piel con agujas afiladas con tinta china, su objetivo es plasmar el número de identificación en el animal. También, se puede realizar por medio de calor.
     
                    .col-md-6
                      figure
                        img(src='@/assets/curso/temas/img2-slider-tema1.png', alt='Texto que describa la imagen').img-slider-tema1
                        //figcaption Leyenda de la imagen

      
                  .row.justify-content-center.align-items-center.my-lg-4
               
                    .col-md-6.mb-4.mb-md-0
                      h4.txt-slider-tema1 Chapeta
                      p.txt-slider-tema1 Placas metálicas o plásticas que se ponen en las orejas de los animales. Es una herramienta usada durante décadas en producción animal, sus escritos son a mano y duran hasta que se caen o ya no se puedan leer. Su postura se realiza con una pistola aplicadora.
   
                    .col-md-6
                      figure
                        img(src='@/assets/curso/temas/img3-slider-tema1.png', alt='Texto que describa la imagen').img-slider-tema1
                        //figcaption Leyenda de la imagen
        
                  .row.justify-content-center.align-items-center.my-lg-4

                    .col-md-6.mb-4.mb-md-0
                        h4.txt-slider-tema1 Nariguera
                        p.txt-slider-tema1 Anillos que se colocan con pistola aplicadora a algunas vacas y toros en la nariz de forma permanente. Este método facilita el manejo y evita complicaciones en el control de animales o al necesitar mansedumbre.
   
                    .col-md-6
                      figure
                        img(src='@/assets/curso/temas/img4-slider-tema1.png', alt='Texto que describa la imagen').img-slider-tema1
                        //figcaption Leyenda de la imagen

            

                  .row.justify-content-center.align-items-center.my-lg-4

                    .col-md-6.mb-4.mb-md-0
                        h4.txt-slider-tema1 Etiqueta RFID
                        p.txt-slider-tema1 Es un sensor electrónico con capacidad para almacenar información, posee un lector y una etiqueta. Dentro de sus ventajas se encuentra la capacidad de monitorear la temperatura corporal, además de los movimientos y la detección del celo. Su postura se realiza haciendo una incisión debajo de la piel, dentro de la cual se introduce el dispositivo.

                    .col-md-6
                      figure
                        img(src='@/assets/curso/temas/img5-slider-tema1.png', alt='Texto que describa la imagen').img-slider-tema1
                        //figcaption Leyenda de la imagen

    
    br
    br

    separador
    
    br

    .row.container.justify-content-around.align-items-align-items-center

        #sujecion-e-inmovilizacion-de-animales
        .titulo-segundo.color-secundario
          h2 1.2  Sujeción e inmovilización de animales

        p Las labores de sujeción e inmovilización de los animales, en fincas tecnificadas, cuentan con una infraestructura apropiada para realizar prácticas de manejo, por lo cual, al momento de ejecutar estas prácticas, se debe contar con estructuras como las que se describen a continuación:
      

        TabsC.color-primario.fondo-pestanas-horiz-tema1
            .py-3.py-md-4(titulo="Sujeción de bovinos.")
              .row
                .col-md-12.mb-4.mb-md-0
                  //h4 Sujeción de bovinos
                  p.txt-sujecion-bobinos En toda explotación se deben realizar castraciones, marcajes y suministrar medicinas, actividades en las cuales se debe derribar o controlar los animales para evitar que, durante estos procedimientos, se afecte la salud del ejemplar o del operario. Algunos predios solo cuentan con botalón para efectuar estas medidas.
              
              .row
                .col-md-12
                  figure
                    img(src='@/assets/curso/temas/img1-pestanas-horiz-tema1.png', alt='Texto que describa la imagen').img-pestanas-horiz-tema1
                    //figcaption Leyenda de la imagen
   
            
            .py-3.py-md-4(titulo="Cómo sujetar cerdos")
              .row    
                .col-md-12
                  //h4 Sujeción de bovinos
                  p.txt-sujecion-bobinos Los métodos por efectuar dependen de algunas variables, por ejemplo, del tipo de explotación, el sexo, la edad o del tipo de proceso que se va a ejecutar (Voogd, 2018). 
                  p.txt-sujecion-bobinos A continuación, se explican algunos de los métodos de sujeción para bovinos y porcinos.

              .row
                .col-md-12.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/img2-pestanas-tema1.png', alt='Texto que describa la imagen').img-pestanas-horiz-tema1
                    //figcaption Leyenda de la imagen

    br

    separador
    
    br
    

    .row.container.justify-content-around.align-items-align-items-center

        #transporte-y-tecnicas-de-movilizacion
        .titulo-segundo.color-secundario
          h2 1.3  Transporte y técnicas de movilización
        p.mb-5(data-aos='fade-right') Otras actividades a tener en cuenta para el manejo de animales, son el transporte y la inmovilización, actividades necesarias para el proceso de descarte y la comercialización.

        .row.fondo-final-tema1 
          .col-lg-7
            .txt-tarj-final-tema1.p-3
              p En el traslado de animales, de un lugar a otro, es importante tener en cuenta el bienestar animal para evitar afectaciones en la calidad del producto. En Colombia se realiza este proceso cuando se requiere trasladar ejemplares a distintos predios para culminar el proceso productivo, cuando hay venta de animales o al finalizar procesos y enviarlos a sacrificio. 
              p Todas las especies de explotación pecuaria son transportadas de la misma forma y, por lo general, se realizan de forma terrestre. Aunque, al realizar exportaciones, estas se hacen por vía aérea o marítima.

          .col-lg-5
              
              figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-final-tema1.png', alt='Texto que describa la imagen').img-final-tema1
        


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
