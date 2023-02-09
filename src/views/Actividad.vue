<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/ad.svg", alt="Texto que describa la imagen")

      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Falso y verdadero
        p.mb-4 Con el objetivo de afianzar los conceptos vistos dentro del componente, realice la siguiente actividad didáctica de falso y verdadero. Se le sugiere realizar un repaso con la finalidad de reforzar sus conocimientos.

        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Falso y verdadero
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/CF8_T_733105_Sanidad y reproducción animal en sistemas agroecológicos/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
