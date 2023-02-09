<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.justify-content-around.align-items-center

      .col-lg-8
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo donde se abordarán la sanidad y la reproducción animal en sistemas pecuarios, según los ciclos estrales de cada especie, empleando métodos de estimulación e inseminación artificial. Así mismo, se espera desarrollar competencias para el manejo de especies, conforme con los criterios técnicos y a la normativa de producción agropecuaria, fundada en principios ecológicos. También, se plantearán temáticas relacionadas con la aplicación de medidas sanitarias, de tratamientos convencionales, o de tratamiento etnoveterinario, en el cual, las plantas juegan un papel fundamental con sus principios fitoquímicos.
            br
            br
            |Otro aspecto importante a desarrollar, es la ejecución de labores cruciales en lo respectivo a la reproducción animal, en aras de optimizar rendimientos o de realizar actividades seguras para el animal en su posterior comercialización y consumo, teniendo en cuenta, claro está, la seguridad de las personas que realizan las labores de manejo.
            br
            br
            |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

      .col-lg-4
          
          figure
              img(src='@/assets/curso/temas/img-introd.png', alt='Texto que describa la imagen').img-introd
       
    br
    br
    br
    
    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
