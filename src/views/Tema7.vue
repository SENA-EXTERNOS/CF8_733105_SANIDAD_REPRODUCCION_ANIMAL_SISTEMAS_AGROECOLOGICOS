<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Registros
 
    
    .row.container.justify-content-around.align-items-align-items-center
 
        p A continuación, se dan ejemplos de registros productivos.
              
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9. 
            span <em>Registros reproductivos en las especies pecuarias</em>

        .row.justify-content-center.mb-5
          .col-lg-12
            figure
              img(src="@/assets/curso/temas/img1-tema-7.png", alt="alt").img1-tema-7
 
 
    br
    br
    br
    
    .row.container.justify-content-around.align-items-align-items-center

        .row 
          .col-lg-7

              p.fondo-color-tar-final-tema7.p-4 En este componente formativo se abordaron temáticas importantes como el manejo de las especies, las enfermedades de relevancia pecuaria, los medicamentos, los tratamientos para tratar infecciones, los métodos de reproducción existentes y los registros reproductivos. Todos los temas, juntos, representan un paquete importante en la producción agroecológica, convirtiendo los lugares de producción en empresas sostenibles que mantienen los índices económicos, al tiempo que protegen los recursos no renovables. De esta manera se da fin a la unidad. Aprendiz, por favor, lea la síntesis del componente y realice la actividad incluida para evaluar sus conocimientos.
 
          .col-lg-5
            
            figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/img-final-tema7.png", alt="alt").img-final-tema7.png
 
 
 
 
 
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
