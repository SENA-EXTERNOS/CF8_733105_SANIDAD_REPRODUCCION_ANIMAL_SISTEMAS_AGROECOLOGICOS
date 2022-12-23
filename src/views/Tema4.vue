<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Anatomía del aparato reproductivo
    
    
    .row.container.justify-content-around.align-items-align-items-center

        p A continuación, se presentan las partes del aparato masculino y sus funciones más relevantes.

        .row.justify-content-center.mb-5

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/img-pasos-vert-tema4.png", alt="alt").img-pasos-vert-tema4
          .col-lg-8
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Testículos") Son glándulas ovoides, se encuentran en el abdomen y cumplen la función de espermatogénesis, es decir, la producción de espermatozoides.

              p(numero="2" titulo="Escroto") Es el saco que cubre los testículos, su función es de termofusión y mantiene una temperatura estable al espermatozoide.

              p(numero="3" titulo="Epidídimos") Son conductos que están unidos a los testículos, sirven como canal conductor de los espermatozoides.

              p(numero="4" titulo="Conducto deferente") Son prolongaciones de los epidídimos, comunican con la uretra y desembocan en la vesícula seminal.

              p(numero="5" titulo="Glándulas accesorias") #[strong Vesículas seminales:] producen el líquido que ayuda a la formación del semen y facilita su transporte.
                br
                | #[strong Próstata:] produce la secreción lechosa y el olor característico.
                br
                | #[strong Glándulas de Cowper:] su función es limpiar y neutralizar la uretra antes del paso del semen.
              
              p(numero="6" titulo="Pene") Se encarga de conducir la orina al exterior y es el órgano encargado de la copulación masculina.
        
        p El origen de un nuevo ser se determina por la unión de dos células germinales, la masculina, espermatozoide, y la femenina, óvulo. Así, se obtiene un huevo, o cigoto, que terminará en la formación de un nuevo individuo. 
        p A continuación, se describirá el aparato reproductor femenino.

    br
    separador

    .row.container.justify-content-around.align-items-align-items-center

        h3 Aparato reproductor femenino
        p A continuación, se presentan las partes del aparato femenino y sus funciones más relevantes.

        .row.justify-content-center.mb-5

          .col-lg-4.fondo-tarj-sist-fem-tema4.tarjeta.p-4
            .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 4.
                span <em>Órganos del aparato reproductor femenino</em>
            figure
              img(src="@/assets/curso/temas/img2-repr-fem-tema4.png", alt="alt").img2-repr-fem-tema4
          .col-lg-8
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Ovarios") Producen las células germinales, óvulos, además de las hormonas sexuales femeninas. Regulan la función de los órganos genitales.

              p(numero="2" titulo="Oviducto o Trompas de Falopio") Son conductos delgados, su función es recoger el óvulo y permitir la llegada al útero

              p(numero="3" titulo="Útero") Es un órgano hueco con paredes musculares, aloja al feto durante la gestación. Se divide en cérvix, cuerpo uterino y cuerno uterino

              p(numero="4" titulo="Vagina") Es el órgano copulador, aloja al pene del macho durante el acoplamiento.

              p(numero="5" titulo="Vulva") Es la última porción del tracto genital.

        p El ciclo estral en las hembras se determina por las interacciones del hipotálamo, la hipófisis y los ovarios. Durante este periodo ocurren una serie de cambios, que se repiten cada cierto tiempo, el cual está comprendido por cuatro fases descritas a continuación.
    
    separador
    br

    .row.container.justify-content-around.align-items-align-items-center

        #ciclo-estral
        .titulo-segundo.color-secundario
          h2 4.1 Ciclo estral

        p Se conoce como ciclo estral al conjunto de eventos fisiológicos que tienen lugar entre un celo y otro. A continuación, se describen las cuatro fases que lo integran. 

        .row 
          .col-lg-12
            figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/img-ciclo-estral.png", alt="alt").img-ciclo-estral
            
    br  
    br  
    br

    .row.container.justify-content-around.align-items-align-items-center

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")

          .row(titulo="POESTRO")
            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema4 Presencia de folículos grandes.
                br
                | Incrementos de estrógenos
                br
                | Incremento de la vascularización del tracto reproductivo de la hembra.
                br
                | Las glándulas endometriales inician su crecimiento.
                br
                | Altos niveles de estrógenos.0000
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img-poestro-tema4.png', alt='Texto que describa la imagen').img-acord-tema4
              p.txt-proestro-tema4 Proestro: periodo donde pre-maduran los folículos.
                //figcaption Leyenda de la imagen


          .row(titulo="ESTRO")
            .col-md-6.mb-4.mb-md-0

              p.txt-acord-tema4 Se deja montar por el macho.
                br
                |  Se reducen los estrógenos.
                br
                |  Ocurre el pico de la hormona luteinizante (LH). 
                br
                |  La ovulación ocurre 24 a 48 horas después del pico de LH.
                br
                |  Alta motilidad uterina con contracciones que se mueven hacia el oviducto.
                br
                |  Transporte de espermatozoides óptimo.
                br
                |  El mucus cervical se incrementa.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img-estro-tema4.png', alt='Texto que describa la imagen').img-acord-tema4
                p.txt-estro-tema4 Estro: celo o calor, fase donde se rompe el folículo y es el momento adecuado para que la hembra acepte el macho para la cúpula.
                //figcaption Leyenda de la imagen

          .row(titulo="METAESTRO")
            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema4 Bajos niveles de estrógenos.
                br
                |  Presencia del cuerpo hemorrágico.
                br
                |  Ovulación en la vaca.
                br
                |  Se reducen drásticamente las contracciones uterinas.
                br
                |  Las glándulas endometriales siguen creciendo.
                br
                |  Algunas vacas pueden sangrar en esta etapa.

              
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img-metaestro-tema4.png', alt='Texto que describa la imagen').img-acord-tema4
                p.txt-mataestro-tema4 Mataestro: fase de formación del cuerpo lúteo.
                //figcaption Leyenda de la imagen

          
          .row(titulo="DIESTRO")
            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema4 Altos niveles de progesterona
                br
                |  Bajos niveles de la hormona folículo estimulante.
                br
                |  El útero secreta fluidos
                br
                |  Se detienen las contracciones uterinas.
                br
                |  El cuerpo lúteo regresa al terminar este periodo si la hembra no está preñada
              
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img-diestro-tema4.png', alt='Texto que describa la imagen').img-acord-tema4
                p.txt-diestro-tema4 Diestro: el cuerpo lúteo, produce grandes cantidades de progesterona.
                //figcaption Leyenda de la imagen

        p En los animales mamíferos las hembras, hasta la pubertad, no pueden preñarse, lo que solo es posible cuando los ovarios se encuentran maduros. El proceso de ovulación está ligado a la alimentación, a factores genéticos y a factores ambientales durante el levante, ya que afectan el estado hormonal y el peso corporal de la vaca para su adecuada reproducción.

    br
    br

    .row.container.justify-content-around.align-items-align-items-center
        
        h3 Ciclo estral de las especies de importancia pecuaria
        p A continuación, se encuentran descritas las características particulares del ciclo estral de las diferentes especies de importancia pecuaria.

        .row.fila1-tarj-ciclo-estral
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-botones.tarj-ciclo-estral.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/temas/img-vaca-ciclo-tema4.png', alt='Texto que describa la imagen').img-ciclo-estral-tema4

              h3.text-center Vaca
              p.text-small Inicio y duración de la pubertad: 7- 18 meses
                br
                | Duración del celo: 20 a 23 días

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-botones.tarj-ciclo-estral.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/temas/img-yegua-tema4.png', alt='Texto que describa la imagen').img-ciclo-estral-tema4

              h3.text-center Yegua
              p.text-small Inicio y duración de la pubertad: 18 meses
                br
                | Duración del celo: 21 días

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta--boton.color-acento-botones.tarj-ciclo-estral.text-white--hover.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/temas/img-oveja-tema4.png', alt='Texto que describa la imagen').img-ciclo-estral-tema4

              h3.text-center Oveja
              p.text-small Inicio y duración de la pubertad: 9 a 15 meses
                br
                | Duración del celo: 17 días

        .row.fila2-tarj-ciclo-estral

          .col-sm-6.col-lg-3
            .tarjeta--boton.color-acento-botones.tarj-ciclo-estral.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/temas/img-cerda-tema4.png', alt='Texto que describa la imagen').img-ciclo-estral-tema4

              h3.text-center Cerda
              p.text-small Inicio y duración de la pubertad: 6 a 8 meses
                br
                | Duración del celo: 20 a 21 días
          
          .col-sm-6.col-lg-3
            .tarjeta--boton.color-acento-botones.tarj-ciclo-estral.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/temas/img-cabra-tema4.png', alt='Texto que describa la imagen').img-ciclo-estral-tema4

              h3.text-center Cabra
              p.text-small Inicio y duración de la pubertad: 4 a 8 meses 
                br
                | Duración del celo: 21 días
  
        p.txt-inf-tarj-tema4 Para que se produzca el celo en la hembra, como se mencionó anteriormente, es necesario que el hipotálamo, la hipófisis y los ovarios generen hormonas e interactúen, de forma sincronizada, para dar inicio a los procesos reproductivos.

    br
    br
    br
    br


    .row.container.justify-content-around.align-items-align-items-center

        #metodos-y-tecnicas-de-deteccion-del-ciclo-estral
        .titulo-segundo.color-secundario
          h2 4.2 Métodos y técnicas de detección del ciclo estral
        
        p Para iniciar el ciclo estral en animales jóvenes es indispensable acelerar la producción de andrógenos, de esta forma, comienza la etapa de la pubertad del animal, alcanzando su madurez sexual. A este punto se le conoce como madurez somática, listas para ser servidas.


        .tarjeta.container.p-4
          
          figure
              img(src='@/assets/curso/temas/img-fondo-slider-tema4.png', alt='Texto que describa la imagen').img-fondo-slider-tema4
          

          SlyderA(tipo="b")

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                h4.img-slider-tema4 Métodos y técnicas para detectar el celo en bovinos.
                p.img-slider-tema4 En fincas tecnificadas que realizan procesos de inseminación artificial, se induce al celo por medio de tratamientos donde controlan todo el proceso. 
                p.img-slider-tema4 No obstante, lo contrario ocurre en lugares donde usan la monta, siendo importante tener en cuenta los siguientes signos. Durante el celo, las vacas manifiestan algunos cambios en su comportamiento, se encuentran inquietas, dejan de alimentarse y disminuyen el proceso de rumia. De pasar esto, la monta se debe realizar a las 12 horas que presentan el comportamiento.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-slider-tec-detec-tema4.png', alt='Texto que describa la imagen').img-slider-tema4
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4
  
              .col-md-6.mb-4.mb-md-0
                h4.img-slider-tema4 Ayudas para detectar el celo en bovinos
                p.img-slider-tema4 Otras ayudas que se usan para detectar el celo son:
                p.img-slider-tema4 #[strong Toros calentadores:] animales que, mediante una intervención quirúrgica, se les modificó el aparato reproductor, bien sea con vasectomía o desviación de pene, aislando las excreciones testiculares.
                p.img-slider-tema4 #[strong Hembras androgenizadas:] hembras que, por presentar problemas reproductivos, poseen características masculinas. Además de haber empleado testosterona.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-detec-celo-slider-tema4.png', alt='Texto que describa la imagen').img-slider-tema4
                  //figcaption Leyenda de la imagen

 

            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                h4.img-slider-tema4 Métodos y técnicas para detectar el celo en cerdos
                p.img-slider-tema4 A medida que se aproxima el celo, la cerda pierde las ganas de alimentarse, se pone inquieta, su vulva se hincha y permanece húmeda. Solo permanecen inmóviles en presencia del verraco. 
                p.img-slider-tema4 En este caso, es importante asignar un operario que vigile la aparición de los anteriores signos y las lleve a ser servidas.


              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-tec-celo-cerdos-slid-tema4.png', alt='Texto que describa la imagen').img-slider-tema4
                  //figcaption Leyenda de la imagen
        
        p.txt-inf-slider-tema4 Así mismo, en la etapa de celo, es importante la estimulación para la reproducción exitosa de las hembras. 

    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        #metodos-de-estimulacion-del-celo
        .titulo-segundo.color-secundario
          h2 4.3 Métodos de estimulación del celo

        p Al hablar de estimulación del celo se hace referencia a disminuir los periodos entre servicios y partos, induciendo a la actividad sexual. La preparación se realiza con diversas hormonas para regular el celo.
        
        .row.bloque-pestanas-tema4
        
          TabsC.color-primario.fondo-pestanas-tema4
            .py-3.py-md-4(titulo="Métodos de estimulación del celo")
              .row
                .col-md-6.mb-4.mb-md-0
                  h4.txt-pestanas-tema4 Métodos de estimulación del celo
                  p.txt-pestanas-tema4 Los métodos para estimular el celo, con ayuda tecnológica, se sincronizan para obtener un mayor número de hembras en estado de gestación, procediendo, posteriormente, a la copulación por método de monta directa, inseminación artificial o con transferencia de embriones. 
              
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img-estim-celo-tema4.png', alt='Texto que describa la imagen').img-pestanas-tema4
                    //figcaption Leyenda de la imagen

            .py-3.py-md-4(titulo="Medicamentos para la estimulación del celo")
              .row
    
                .col-md-6
                  h4.txt-pestanas-tema4 Medicamentos para la estimulación del celo
                  p.txt-pestanas-tema4 A continuación, se describen algunos de los medicamentos usados para la estimulación del celo. 

                  ul.lista-ul--color.txt-pestanas-tema4
                    li 
                      i.fas.fa-atom
                      p #[strong Aplicación de progestágenos:] vienen en tres presentaciones, de vía oral, para suministrar a través del alimento, de implantes cutáneos y de dispositivos vaginales. Estos se encargan de formar bloqueo en el hipotálamo, simulando una fase lútea, inhibiendo el celo y la producción de óvulos hasta que son retirados.
                    li 
                      i.fas.fa-atom
                      p #[strong Uso de prostaglandinas:] este tipo de hormonas producen variación en la estructura del ovario, controla la producción de progesterona y marcan el ciclo estral.
                    li 
                      i.fas.fa-atom
                      p #[strong Suministro de estrógenos con progesterona:] optimiza el proceso de ovulación y aumenta el celo.
    
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/img-medic-estim-celo-tema4.png', alt='Texto que describa la imagen').img-pestanas-tema4
                    //figcaption Leyenda de la imagen

    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center
        .row 

            .col-lg-4
                figure
                    img(data-aos="fade-right")(src='@/assets/curso/temas/img-final-tema4.png', alt='Texto que describa la imagen').img-final-tema4
            

            .col-lg-8
                p.txt-final-tema4 Como se verá a continuación, la inseminación artificial consiste en la introducción del líquido seminal del macho, extraído de sus órganos genitales, en los conductos cervicales de la hembra, una vez se encuentra en celo inducido por hormonas y métodos artificiales. El semen es obtenido estimulando al macho, posteriormente, se conserva y congela. Este proceso se realiza mediante procesos especializados, contenedores y tanques diseñados para tal fin.



</template>

<script>
export default {
  name: 'Tema3',
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
