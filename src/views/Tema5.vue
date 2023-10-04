<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Inseminación artificial
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/c5.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La inseminación artificial consiste en la introducción del líquido seminal del macho, extraído de sus órganos genitales, en los conductos cervicales de la hembra, una vez se encuentra en celo, inducido por hormonas y métodos artificiales. El semen es obtenido estimulando al macho y, posteriormente, se conserva y congela. Este proceso se realiza mediante procesos especializados, contenedores y tanques, diseñados para tal fin.

    
    .row.container.justify-content-around.align-items-align-items-center
    
        figure
              img(src='@/assets/curso/temas/img-fondo-der-tema5.png', alt='Texto que describa la imagen').img-fondo-der-tema5

    
        .row 
          .col-lg-6
          
            .cajon.color-acento-contenido.p-4(style="background-color: #f2f8e8")
              p La inseminación es una herramienta de gran importancia y utilidad en granjas tecnificadas y en producciones pequeñas, al brindar una variedad de ventajas a las fincas de producción pecuaria. Muchas granjas manejan el 100 % de sus servicios con este método, otras combinan la inseminación con la monta natural. Es así, como se describen sus ventajas:
              ul.lista-ul--color
                li 
                  i.fas.fa-atom
                  | Disminución de transmisión de patologías.
                li 
                  i.fas.fa-atom
                  | Se evita la presencia de reproductores que puedan portar enfermedades.
                li 
                  i.fas.fa-atom
                  | Mejorar el potencial genético de la finca.
                li
                  i.fas.fa-atom
                  | Se controlan los riesgos de traumas ocasionados durante la monta directa.
                li 
                  i.fas.fa-atom
                  | Usando pajillas de alto valor genético, se mejora la producción de carnes y, con ello, se amplían los rendimientos económicos.
                li 
                  i.fas.fa-atom
                  | Se evita la consanguinidad.  
          
          .col-lg-6

              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 6
                br
                span <em>Proceso de inseminación artificial</em>
          
              figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img1-tema5.png', alt='Texto que describa la imagen').img1-tema5


    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        h2 Equipos, herramientas y materiales para la inseminación artificial
        p.mb-5(data-aos='fade-right') Al momento de realizar actividades de manejo reproductivo, es importante contar con las herramientas adecuadas. Encuentre información detallada de los equipos y las herramientas necesarias para la inseminación artificial en el siguiente anexo:
    

        .row.justify-content-center.bloque-tarj1-man-anim-tema51.mb-5
          .col-lg-10.fondo-tarj1-man-anim-tema11.tarjeta.p-4
            .row 
            
              .col
                .text-white.p-3
                  h4.mb-0 Equipos, herramientas y materiales para la inseminación artificial

              .col-lg-auto
                .boton-tarj1-man-anim-tema1
                  a.boton.boton--b(href="https://idoc.pub/documents/materiales-y-equipos-para-la-inseminacion-artificial-6nq8gz5p62nw" target="_blank")
                    .anexo__texto
                    span Ver enlace
                    i.fas.fa-chain
    .row.container.justify-content-around.align-items-align-items-center
        
        h3.subtitulo-de-pajillas Descongelación de pajillas
        
        .row 
            .col-lg-6
              .cajon.color-acento-botones.p-4
                p En las pajillas está contenido el semen de los toros, siendo conservado así, para realizar inseminaciones artificiales o con la intención de perfeccionar las condiciones genéticas de una raza.

                p Una pajilla es un tubo delgado que contiene las células reproductivas del macho, se conservan en un tanque de nitrógeno, manteniéndolas a temperaturas adecuadas (-196 °C) para, posteriormente, ser usadas en los procesos de inseminación artificial con la finalidad de mejorar las condiciones genéticas de las razas.
                p El método más común para descongelar pajillas es sumergiéndola en agua a 37 °C durante 40 segundos. Para realizar el proceso de forma exitosa, la pajilla debe tener poco contacto con los dedos y evitar la exposición al sol. Una vez descongelada, no se podrá volver a congelar.

            .col-lg-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 7
                  br
                  span <em>Kit para la inseminación artificial con pajillas</em>
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img2-final-tema5.png', alt='Texto que describa la imagen').img-final-tema5
        
            

    


</template>

<script>
export default {
  name: 'Tema5',
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
