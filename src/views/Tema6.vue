<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Monta

    
    .row.container.justify-content-around.align-items-align-items-center

        p La monta es el acto de unión entre los sexos (salto de la hembra por el macho), en el que se deposita en la hembra el semen esto solo se logra cuando la reproductora está en celo y puede efectuarse de diferentes formas.
          br
          br
          |Las principales montas están descritas a continuación: 
        
        
        
        .row.justify-content-center.mb-5
          .col-lg-6
            figure
              img(data-aos="fade-right")(src="@/assets/curso/temas/img1-tema6.png", alt="alt").img1-tema6

          .col-lg-6
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Monta libre o en libertad:") Se usa con mayor frecuencia en explotaciones extensivas y consiste en dejar que los animales se acoplan libremente. Para esto, los productores dejan en libertad varios reproductores dentro de grupos numerosos de hembras.

              p(numero="2" titulo="Monta dirigida o vigilada:") La hembra es llevada al macho en el periodo escogido, cuando se encuentre en celo,  recordando que “la copulación debe realizarse 12 horas después de los primeros síntomas del ciclo estral”. Este sistema es más común en explotaciones intensivas y facilita llevar un control de paternidad en épocas de parto. Igualmente, este proceso permite emplear un gran número de hembras por cada macho, contribuyendo a mejorar el potencial genético de la finca. El éxito de la técnica radica en aprender a detectar, de forma correcta, los celos.


  

 
 
</template>

<script>
export default {
  name: 'Tema6',
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
