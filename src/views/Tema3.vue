<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tratamientos convencionales, medicamentos, equipos e insumos

      
    .row.container.justify-content-around.align-items-align-items-center

        .row.justify-content-center.mb-5
          .col-lg-7
            p Los tratamientos convencionales son prácticas que se realizan, tradicionalmente, con base en sustancias químicas, biológicas y hormonales, las cuales contienen propiedades curativas que previenen enfermedades en los animales; estas son las características que se deben tener en cuenta:
          .col-lg-5: img(src='@/assets/curso/temas/c3.png', alt='')

        .tarjeta.container.p-4
          figure
              img(src='@/assets/curso/temas/img-fondo-slider-tema3.png', alt='Texto que describa la imagen').img-fondo-slider-tema3
        
          SlyderA(tipo="b")

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                h4.txt-slider-tema3 Tratamientos convencionales
                p.txt-slider-tema3 De acuerdo a lo anterior, se suministran componentes a los semovientes para restablecer y corregir las funciones metabólicas. 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img1-slider-tema3.png', alt='Texto que describa la imagen').img-slider-tema3
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                h4.txt-slider-tema3 Realizar un diagnóstico
                p.txt-slider-tema3 Para suministrar cualquier medicamento, es necesario realizar un diagnóstico. De esta manera se contribuye, además, al control de patologías y a la optimización de la salud del animal.
 
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img2-slider-tema3.png', alt='Texto que describa la imagen').img-slider-tema3
                  //figcaption Leyenda de la imagen
           
            .row.justify-content-center.align-items-center.my-lg-4
              
              .col-md-6.mb-4.mb-md-0
                h4.txt-slider-tema3 Riesgos a tener en cuenta
                p.txt-slider-tema3 Algunos riesgos a tener en cuenta son: reacción alérgica al ingrediente activo, inoculaciones accidentales, poca eficacia y resistencia a los antibióticos. 


              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img3-slider-tema3.png', alt='Texto que describa la imagen').img-slider-tema3
                  //figcaption Leyenda de la imagen

     
            .row.justify-content-center.align-items-center.my-lg-4

              .col-md-6.mb-4.mb-md-0
                h4.txt-slider-tema3 Las medicinas veterinarias
                p.txt-slider-tema3 Las medicinas veterinarias se clasifican según su naturaleza (inmunológicos y farmacológicos), según sus propiedades (antiparásitos y analgésicos) y según su vía de suministro (orales, cutáneos e inyectables).

    
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img4-slider-tema3.png', alt='Texto que describa la imagen').img-slider-tema3
                  //figcaption Leyenda de la imagen

    
    br
    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center
      
      h3 Medicamentos
      p Está invitado a explorar los principales medicamentos que se emplean para la sanidad animal en el tratamiento de enfermedades en porcinos y bovinos:
    
      .row.justify-content-center.mb-3
        .col-lg-10
          .cajon.color-acento-botones.p-4
            p.mb-0 Los medicamentos son sustancia de origen química, sintética o natural, usada para la curación, prevención y alivio de una enfermedad que afecta el normal funcionamiento del organismo del animal.

    .row.justify-content-center.mb-5.mt-4
      .col-lg-10.bloque-tarj1-man-anim-tema1.p-4
        .row.align-items-center 
          .col-auto
                img(src='@/assets/curso/temas/img-etap-prod-tema1.png', alt='Texto que describa la imagen')           
          .col
              h3.text-white.mb-0 Medicamentos para bovinos y porcinos.
          .col-auto
            a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_4_Medicamentos_veterinarios.pdf')" target="_blank")
              .anexo__texto
              span Ver enlace
              i.fas.fa-chain      



    .row.container.justify-content-around.align-items-align-items-center

        h3 Equipos e instrumental
        .row.justify-content-center.mb-5
          .col-lg-7
            p Existen herramientas e implementos instrumentales para el manejo de la sanidad animal; es importante contar con ellas para el manejo de la producción pecuaria, y deben estar correctamente desinfectadas y almacenadas en condiciones mínimas sanitarias, garantizando una segura manipulación y evitando la propagación de enfermedades de contacto.
              br
              br
              |En toda explotación pecuaria es necesario contar con equipos que faciliten los procesos de aplicación de medicamentos, de inmovilización, de intervenciones quirúrgicas, de detención de malestares para el manejo de patologías causadas por bacterias, hongos, virus o protozoos, y de inflamaciones, producto de algún golpe, o de heridas causadas por objetos cortopunzantes o por actividades de manejo mal hechas.
              br
              br
              |Dentro de los equipos más usados se encuentran:
          .col-lg-5: img(src='@/assets/curso/temas/v1.png', alt='')

        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img-pto-caliente-tema3.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="40%" y="10%" numero="1")
            .h5.mb-2 Termómetro
            p Instrumento usado para detectar altas temperaturas.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="55%" y="35%" numero="2")
            .h5.mb-2 Tijeras
            p Objeto que se usa para realizar pequeños cortes en procedimientos quirúrgicos.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="60%" y="10%" numero="3")
            .h5.mb-2 Bisturí
            p Utensilio cortopunzante, de uso quirúrgico, empleado para castración, extirpación y barridos.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="30%" y="40%" numero="4")
            .h5.mb-2 Agujas
            p Elemento usado para aplicar medicamentos de uso veterinario. Hay tanto agujas desechables, como reutilizables.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="40%" y="67%" numero="5")
            .h5.mb-2 Jeringas
            p Instrumento que, junto a las agujas, se emplea directamente sobre el animal.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="60%" y="67%" numero="6")
            .h5.mb-2 Sondas
            p Se emplea para extraer líquidos internos o para aplicar medicamentos.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="20%" y="90%" numero="7")
            .h5.mb-2 Nariguera
            p Herramienta para sujeción e inmovilización del animal.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="50%" y="95%" numero="8")
            .h5.mb-2 Lazos
            p Objeto usado para realizar nudos e inmovilizar.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="80%" y="90%" numero="9")
            .h5.mb-2 Pinzas
            p Instrumento utilizado para extraer cuerpos extraños.
        



    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center.mb-5

        h3 Insumos
        .row.justify-content-center.align-items-center
          .col-lg-3: img(src='@/assets/curso/temas/c4.png', alt='')
          .col-lg-9
            p Los insumos para atender a los animales, en cuanto a su manejo sanitario, requieren ser almacenados con cuidado, limpiados y secados, protegiéndolos del sol y la humedad evitando el deterioro de sus propiedades físicas. Algunos de esos insumos se describen a continuación.
              br
              br
              |Los insumos son todos los productos, de origen natural o sintético, utilizados para favorecer la producción agropecuaria. Igualmente, ayudan a diagnosticar, prevenir y erradicar enfermedades o agentes patógenos que afectan el rendimiento de los animales y sus subproductos. Entre los principales insumos empleados en la producción pecuaria, se encuentran: 

        .row.fila1-tarj-avat-tema3
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.p-4  
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img1-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Droga
                p.text-small Producto fármaco de origen animal o vegetal, utilizado para tratar enfermedades que padecen los animales.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img2-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Producto biológico
                p.text-small Producto extraído de un organismo vivo, empleado para realizar control biológico de enfermedades.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.text-white--hover.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img3-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Medicamento
                p.text-small Principio activo de uso farmacéutico.

          .col-sm-6.col-lg-3
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img4-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Producto natural
                p.text-small Producto derivado de ingredientes naturales para uso terapéutico.

        .row.fila2-tarj-avat-tema3

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.p-4  
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img5-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Medicamento homeopático
                p.text-small Producto fármaco de origen natural.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img6-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Cosmético
                p.text-small Hechos con fines de embellecimiento.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.text-white--hover.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img7-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Probióticos
                p.text-small Son microorganismos que aportan beneficios, generalmente, se usan para ayudar en los procesos digestivos.

          .col-sm-6.col-lg-3
            .tarjeta--boton.color-acento-botones.tarj-avat-tema3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img8-tarj-tema3.png', alt='Texto que describa la imagen').img-tarj-avatar-tema3
              .txt-tarj-avatar-tema3
                h3.text-center Aditivo
                p.text-small Producto usado para mejorar el sabor de los alimentos.


    separador
    br

    .row.container.justify-content-around.align-items-align-items-center

        #medicina-etnoveterinaria
        .titulo-segundo.color-secundario
          h2 3.1 Medicina etnoveterinaria
        p.mb-5(data-aos='fade-right') La etnoveterinaria, en el manejo de la producción agropecuaria, se considera un modelo basado en producciones que emplean insumos naturales o elementos que son de fácil acceso. Para conocer más sobre el manejo alternativo del bienestar animal, explore a profundidad en el siguiente vídeo:

        .row.tarjeta.tarjeta--blanca.p-2.p-md-3

          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/cXMCjHZBDes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    br  
    br  
    br

    .row.container.justify-content-around.align-items-align-items-center

        #plantas-medicinales
        .titulo-segundo.color-secundario
          h2 3.2 Plantas medicinales
        
        p En las plantas medicinales se encuentran principios alelopáticos, con propiedades fitoquímicas, que se aprovechan en la elaboración de remedios y, a partir de estas características, se emplean para el alivio de dolencias, infecciones y enfermedades y, también para realizar curaciones para los animales.
          br
          br
          |Las plantas medicinales ejercen efectos de curación, además de un amplio potencial que efectúan sobre el desarrollo sostenible de la producción. Colombia, gracias a su diversidad de climas y variedad de sus suelos, propicia que las plantas se adapten fácilmente, con óptimas condiciones, favoreciendo su reproducción vegetal. 
          br
          br
          |A continuación, se dan a conocer las principales plantas medicinales en el uso veterinario:


        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")

          .row(titulo="Mango <em>Mangifera indica</em>")
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img1-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen
            
            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Se usa para inflamación y quebraduras en vacas y cerdos.


          
          .row(titulo="Anís <em>Pimpinella anisum L.</em>")   

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img2-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen
            
            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Cuenta con propiedades antisépticas y es repelente de insectos


          .row(titulo="Algarrobo <em>Hymenaea courbaril L.</em>")

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img3-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Controla parásitos intestinales e infecciones urinarias.
          


          
          .row(titulo="Albahaca <em>Ocimun basilicum L.</em>")
            
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img4-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Ayuda en afecciones gastrointestinales.
          
        


          .row(titulo="Ajenjo <em>Artemisia absinthium L.</em>")
            
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img5-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Tónico estomacal, antiespasmódico, antiácido, estimulante del apetito, benéfico en afecciones de la vesícula biliar.
          
        
          
          .row(titulo="Ají <em>Capsicum annuum var.</em>")
            
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img6-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

     
            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Sus frutos se usan como revulsivos y como ungüentos en tratamiento de lumbagos y neuralgias.
          
          .row(titulo="Árnica <em>Arnica montana L.</em>")
            
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img7-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Cicatrizante, antiinflamatorio, analgésico y antineurálgico.
          
           
          
          .row(titulo="Belladona - Botón negro <em>Atropa belladonna L.</em>")

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img8-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Antiséptico y cicatrizante, ayuda en afecciones cutáneas y alérgicas.
          
      
          .row(titulo="Sábila Aloe vera L.")
            
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img9-plantas-medic-tema3.png', alt='Texto que describa la imagen').img-plantas-medic-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.txt-plantas-medic-tema3 Por vía oral trata la hipertensión, el reumatismo y las úlceras. Tópicamente, se emplea en el tratamiento del acné, la dermatitis, las irritaciones de la piel y como cicatrizante.
          
       


        


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
