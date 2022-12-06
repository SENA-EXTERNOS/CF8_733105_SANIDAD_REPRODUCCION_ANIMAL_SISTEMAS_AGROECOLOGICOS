<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Anatomía de las especies pecuarias

      
    .row.container.justify-content-around.align-items-align-items-center

      p La anatomía animal se encarga de estudiar tanto la forma y las estructuras de los órganos que conforman un sistema, como su relación dentro del organismo, lo que hace posible conocer el funcionamiento de cada uno de ellos (Villa-Forte, 2022).
      p Dentro de los sistemas anatómicos del cuerpo animal se encuentra el sistema músculo esquelético, el sistema cardiovascular, el sistema respiratorio, el sistema digestivo, el sistema urinario y el sistema reproductor.
      
      .row 
        .col-lg-12
            figure
                img(data-aos="fade-left")(src='@/assets/curso/temas/img1-tema2.png', alt='Texto que describa la imagen').img1-tema2

      p.txt-inf-img1-tema2 La salud de los animales es resultado de la integración de muchos factores, en los cuales debe primar la prevención, el tratamiento y la curación. A su vez, depende de varias condiciones, por ejemplo, de la capacidad de reacción ante enfermedades, del estado de inmunidad ligado a la raza, el clima y el suelo, o del manejo por parte del operario y de la ejecución de planes de desinfección.    
      

    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        #enfermedades-de-las-especies-pecuarias
        .titulo-segundo.color-secundario
          h2 2.1 Enfermedades de las especies pecuarias

        p A continuación, se presentan las principales enfermedades en los bovinos.

        .row
          figure
                img(src="@/assets/curso/temas/img-der2-fond-tema1.png", alt="alt").img-der2-fond-tema1
              
          
          .col-lg-6
          
            .row.justify-content-center.mb-5
                .col-lg-9.position-relative

                  .crd.crd--avatarHorizontal.crd--first.fondo-tarj-tema2.py-4
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src="@/assets/curso/temas/img1-enferm-tema2.png", alt="alt").img100.imgs-tarj-tema2
                      .col
                        h5.txts-tarj-tema2.text-small Enfermedades del tracto digestivo
                        p.txts-tarj-tema2.text-small Coccidiosis = Protozoo
                          br
                          | Parásitos gastrointestinales por nematodos = Helmintos
                          br
                          | Parásitos gastrointestinales por trematodos =Helmintos
                          br
                          | Diarrea viral bovina = Virus
                          br
                          | Diarrea neonatal = Bacterias

                  .crd.crd--avatarHorizontal.fondo-tarj2-tema2.py-4
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src="@/assets/curso/temas/img2-enferm-tema2.png", alt="alt").img100.imgs-tarj-tema2
                      .col
                        h5.txts-tarj-tema2.text-small Enfermedades respiratorias
                        p.txts-tarj-tema2.text-small Complejo de enfermedad respiratoria bovina = Bacteria
                          br
                          | Rinobronquitis bovina infecciosa = virus
                          br
                          | Bronquitis verminosa	= helminto
                          br
                          | Neumonía= Virus o bacteria
                        
                  .crd.crd--avatarHorizontal.crd--last.fondo-tarj3-tema2.py-4
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src="@/assets/curso/temas/img3-enferm-tema2.png", alt="alt").img100.imgs-tarj-tema2
                      .col
                        h5.txts-tarj-tema2.text-small Enfermedades generalizadas
                        p.txts-tarj-tema2.text-small Fiebre aftosa = Virus
                          br
                          |  Tétanos = Bacteria
                          br
                          |  Tuberculosis = Bacteria
                          br
                          |  Abscesos = Bacteria
                          br
                          |  Carbón bacteridiano = Bacteria
                          br
                          |  Carbón sintomático = Bacteria
                          br
                          |  Edema maligno = Bacteria
          .col-lg-6
            .row.justify-content-center.mb-5
                .col-lg-9.position-relative

                  .crd.crd--avatarHorizontal.crd--last.fondo-tarj4-tema2.py-4
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src="@/assets/curso/temas/img4-enferm-tema2.png", alt="alt").img100.imgs-tarj-tema2
                      .col
                        h5.txts-tarj-tema2.text-small Enfermedades reproductivas
                        p.txts-tarj-tema2.text-small Brucelosis = bacteria
                          br
                          |  Campilobacteriosis = Bacteria
                          br
                          |  Tricomoniasis = Protozoo
                          br
                          |  Mastitis = Bacterias
                          br
                          |  Metritis = bacterias
                        
                  .crd.crd--avatarHorizontal.crd--last.fondo-tarj5-tema2.py-4
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src="@/assets/curso/temas/img5-enferm-tema2.png", alt="alt").img100.imgs-tarj-tema2
                      .col
                        h5.txts-tarj-tema2.text-small Enfermedades de la piel
                        p.txts-tarj-tema2.text-small Gusaneras = Larvas de la mosca
                          br
                          |  Garrapatas = Parásitos externos
                          br
                          |  Sarna = Parásitos externos
        
        p.txt-inf-tarj-conect-tema2 A continuación, se describen algunas enfermedades comunes que se presentan en porcinos para producción pecuaria, junto a sus agentes causantes.
    
    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        h3 Principales enfermedades de los porcinos

        p A continuación, se presentan las principales enfermedades en los porcinos.

        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/img-enfrm-porcin-tema2.png", alt="alt")
          .col-lg-8
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Enfermedades respiratorias") Neumonía = Mala ventilación y apiñamiento
                br
                |  Rinitis atrófica = Ambientes con polvo, nivel alto de amoniaco
                br
                |  Pleuroneumonía = Higiene deficiente, hacinamiento y cerdos portadores
                br
                |  Influenza = Virus propagado en el aire o compra de animales infectados

              p(numero="2" titulo="Enfermedades del sistema digestivo") Colibacilosis = Alimentos descompuestos, contaminación por heces
                br
                |  Diarrea post destete = Enfermedad que ocurre después del destete o el cambio de dieta
                br
                |  Enteritis = Higiene deficiente
                br
                |  Infección de clostridios = Deficiencia en vitamina E

              p(numero="3" titulo="Enfermedades del sistema reproductor") Parvovirosis = Por contacto directo o contaminación ambiental
                br
                |  Leptospirosis = A través de la orina de cerdos infectados
                br
                |  Brucelosis = A través de cúpula, placentas y fetos abortados

              p(numero="4" titulo="Otras enfermedades") Mastitis = Alimentos con poca fibra, falta de ejercicio, gordura excesiva
                br
                |  Hipoglicemia = Ocasionada por la leche o bajas temperaturas del corral 
                br
                |  Artritis = Cambios bruscos de temperatura
                br
                |  Epidermis = Heridas en la piel
                br
                |  Síndrome reproductivo = Transmisión por semen y contacto directo

        p A continuación, podrá observar cómo el deterioro del bienestar, la salud y la productividad en los animales, puede estar originado por agentes causantes de enfermedades que deben ser manejados conforme a un plan sanitario.


    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        #plan-sanitario
        .titulo-segundo.color-secundario
          h2 2.3 Plan sanitario

        p Está dirigido, básicamente, a controlar, prevenir y erradicar enfermedades que afecten los sistemas de producción agropecuaria. Su objetivo es reforzar los trabajos de manejo y diagnóstico, con el fin de disminuir los riesgos que afectan la sanidad del hato. 
        p A continuación, se describe el plan de vacunación para los bovinos.

        .bg--img_03
          .row.justify-content-center.mb-4

            .col-lg-7
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
                .row(titulo="Fiebre aftosa")
                  .col-12
                    p.mb-0 Se vacunan todos los animales adultos y los terneros desde los 6 meses 
                    p  Revacunación = Cada 6 meses
                    p  Generalmente, se establecen dos fechas al año para la vacunación (consultar con la autoridad sanitaria de la zona)

                .row(titulo="Carbón sintomático")
                  .col-12
                    p.mb-0 Se vacunan machos y hembras desde los 3 meses 
                    p  Revacunación = destete y cada año
                    p  Comprobada la enfermedad en hato, se aplica una dosis de refuerzo al año de edad.
                    
                .row(titulo="Septicemia hemorrágica")
                  .col-12
                    p.mb-0 Se vacunan machos y hembras desde los 3 meses 
                    p  Revacunación = destete y cada año
                    p  Comprobada la enfermedad, se aplica una dosis de refuerzo al año
                                          
                .row(titulo="Edema maligno")
                  .col-12
                    p.mb-0 Se vacunan machos y hembras desde los 3 meses 
                    p  Revacunación = destete y cada año
                    p  Comprobada la enfermedad, se aplica una dosis de refuerzo al año
                    
                .row(titulo="Carbón bacteridiano")
                  .col-12
                    p.mb-0 Se vacunan al año
                    p  Revacunación= Cada año
                    p  Vacunar siempre que la enfermedad se presente en la zona, siguiendo, siempre, la recomendación veterinaria

                .row(titulo="Brucelosis")
                  .col-12
                    p.mb-0 Se vacunan terneras entre los 3 y 7 meses 
                    p  Revacunación= Una sola vez
                    p  No vacunar hembras mayores de 9 meses o hembras adultas
                    p  No vacunar machos destinados para la reproducción
            
            .col-lg-5
            
              .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 2. 
                  span <em>Vacunación en bovinos</em>

              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-plan-vacunacion-tema2.png", alt="alt").img400.m-auto   

    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        .row 
          .col-lg-4
              figure
                img(data-aos="fade-right")(src="@/assets/curso/temas/img-ptos-a-consider-tema2.png", alt="alt").img-ptos-a-consider-tema2
          
          .col-lg-7
              p Algunos de los puntos para considerar en un plan sanitario son: suministro de calostro, alimentación adecuada, agua potable, adecuada disposición de residuos, adecuado manejo de los partos y, el más importante, plan de vacunación de acuerdo a las enfermedades presentes en la zona. Para los porcinos, a continuación, se encuentran las vacunas a aplicar según el plan sanitario.
    
    br
    br
    br
    
    .row.container.justify-content-around.align-items-align-items-center

        h3 Plan sanitario de porcinos

        p El plan sanitario de vacunación para los cerdos se encuentra descrito a continuación.

        .row.justify-content-center.mb-5

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/img-plan-sanit-porcin-tema2.png", alt="alt")

          .col-lg-8
            LineaTiempoD.color-secundario

              p(numero="1" titulo="Aftosa")
                  img(src="@/assets/curso/temas/img-aftosa-tema2.png", alt="alt")



              p(numero="2" titulo="Peste porcina") 
                  img(src="@/assets/curso/temas/img-peste-porcina-tema2.png", alt="alt")

              p(numero="3" titulo="Rinitis atrófica") 
                  img(src="@/assets/curso/temas/img-rinitis-tema2.png", alt="alt")

              p(numero="4" titulo="Parvovirus") 
                  img(src="@/assets/curso/temas/img-parvovirus-tema2.png", alt="alt")
              
              p(numero="5" titulo="Leptospira") 
                  img(src="@/assets/curso/temas/img-leptospira-tema2.png", alt="alt")

              p(numero="6" titulo="Erisipela") 
                  img(src="@/assets/curso/temas/img-irisipela-tema2.png", alt="alt")

              p(numero="7" titulo="Enfermedad de aujeszky") 
                  img(src="@/assets/curso/temas/img-enfermedad-aujeszky.png", alt="alt")
              
              p(numero="8" titulo="Diarrea neonatal") 
                  img(src="@/assets/curso/temas/img-diarrea-neonalta-tema2.png", alt="alt")
              
              p(numero="9" titulo="Vermifumigación") 
                  img(src="@/assets/curso/temas/img-verifumigacion-tema2.png", alt="alt")
        
        p Para tratar enfermedades en los animales existen tratamientos como los métodos curativos y preventivos convencionales que requiere medicamentos, equipos e insumos apropiados para un adecuado manejo.      






</template>

<script>
export default {
  name: 'Tema2',
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
