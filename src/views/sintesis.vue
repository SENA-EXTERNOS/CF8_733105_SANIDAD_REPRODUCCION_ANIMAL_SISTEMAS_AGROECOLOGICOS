<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p  El objetivo de este componente es aprender labores de manejo para el bienestar animal, según la especie y el tipo de ganado, incluyendo técnicas de inmovilización, sin causar daño a los animales al momento del transporte o aplicación de tratamientos en procesos productivos y reproductivos, teniendo en cuenta la anatomía,  medicamento,  prácticas de mejoramiento genético,  métodos adecuados de monta, ya sea directa o involucrando la tecnología, como es el caso de la inseminación artificial para aumentar la competitividad en el mercado y la sanidad animal.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/img-sintesis.png", alt="alt").img-sintesis
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
