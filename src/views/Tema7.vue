<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Registros
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/c6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los registros de producción están diseñados para brindar información, controlar la producción de cada animal y su consumo de alimento, de forma que, el productor, pueda calcular los beneficios obtenidos. Este censo, o registro, es necesario tanto para la toma de decisiones, como para maximizar la rentabilidad de la producción. 
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

              p.fondo-color-tar-final-tema7.p-4 En este componente formativo se abordaron temáticas importantes como el manejo de las especies, las enfermedades de relevancia pecuaria, los medicamentos, los tratamientos para tratar infecciones, los métodos de reproducción existentes y los registros reproductivos. Todos los temas, juntos, representan un paquete importante en la producción agroecológica, convirtiendo los lugares de producción en empresas sostenibles que mantienen los índices económicos, al tiempo que protegen los recursos no renovables. 
                br
                br
                |Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
 
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
