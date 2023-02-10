<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p  Los conocimientos de este componente son fundamentales para asegurar la sanidad pública y la seguridad alimentaria. Esto se debe a que, frente a la necesidad de producir alimentos, es indispensable contar con animales sanos que garanticen productos de calidad, con precios justos, que satisfagan las necesidades de la población. El manejo de animales para planear el desarrollo productivo, requiere poner en práctica conocimientos indispensables sobre reproducción para, así, poder determinar el éxito de la explotación agropecuaria.
      br
      br
      |El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/img-sintesis.png", alt="alt").img-sintesis
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis_new.pdf')" target="_blank")
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
