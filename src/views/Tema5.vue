<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Inseminación artificial

    
    .row.container.justify-content-around.align-items-align-items-center
    
        figure
              img(src='@/assets/curso/temas/img-fondo-der-tema5.png', alt='Texto que describa la imagen').img-fondo-der-tema5

    
        .row 
          .col-lg-6
          
            .cajon.color-acento-botones.p-4
              p La inseminación es una herramienta de gran importancia y utilidad en granjas tecnificadas y en producciones pequeñas, al brindar una variedad de ventajas a las fincas de producción pecuaria. Muchas granjas manejan el 100% de sus servicios con este método, otras combinan la inseminación con la monta natural.
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
                h5 Figura 6.
                span <em>Libertades del bienestar animal</em>
          
              figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img1-tema5.png', alt='Texto que describa la imagen').img1-tema5

          p.txt-inf-tarj1-tema5 Al momento de realizar actividades de manejo reproductivo es importante contar con las herramientas adecuadas. En el siguiente botón se encuentran detallados los equipos y las herramientas necesarias para la inseminación artificial.

    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        #identificacion-del-animal
        .titulo-segundo.color-secundario
          h2 5.1 Equipos, herramientas y materiales para la inseminación artificial
    

        .row.bloque-tarj1-man-anim-tema5
          .col-lg-10.fondo-tarj1-man-anim-tema1.tarjeta.p-4
            .row 
              .col-lg-2
                    img(src='@/assets/curso/temas/img-cerdo-tema5.png', alt='Texto que describa la imagen').img1-man-anim-tema5
              
              .col-lg-8

                  p.txt-tarj1-man-anim-tema1 Manejo de cerdos según etapa productiva

              .col-lg-2
                .boton-tarj1-man-anim-tema1
                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_5_ etapa_productiva_cerdos_compressed.pdf')" target="_blank")
                    .anexo__texto
                    span Ver enlace
                    i.fas.fa-chain

        p.txt-inf-tarj2-tema5 En las pajillas está contenido el semen de los toros, siendo conservado así para realizar inseminaciones artificiales o con la intención de perfeccionar las condiciones genéticas de una raza.


    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center
        
        h3.subtitulo-de-pajillas Descongelación de pajillas
        
        .row 
            .col-lg-6
              .cajon.color-acento-botones.p-4
                p Una pajilla es tubo delgado que contiene las células reproductivas del macho, se conservan en un tanque de nitrógeno, manteniéndolas a temperaturas adecuadas (-196C) para, posteriormente, ser usadas en los procesos de inseminación artificial con la finalidad de mejorar las condiciones genéticas de las razas.
                p El método más común para descongelar pajillas es sumergiéndola en agua a 37C durante 40 segundos. Para realizar el proceso de forma exitosa, la pajilla debe tener poco contacto con los dedos y evitar la exposición al sol. Una vez descongelada, no se podrá volver a congelar.

            .col-lg-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 7.
                  span <em>Kit para la inseminación artificial con pajillas</em>
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img2-final-tema5.png', alt='Texto que describa la imagen').img-final-tema5
        
        p Ahora, se describe el ejercicio de monta para la reproducción animal.
            

    


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
