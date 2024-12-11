<template>
         <!-- comments section -->
         <div id="comments" class="slider">
              <div class="slide-track">
                <div class=" slide">
                  <CommentIlustrative :img="h1" name="Carlos Hernández"
                    description="Encontré una asesora confiable." date="Octubre 15, 2023" rating="⭐⭐⭐⭐"
                    comment="Evité ser estafado gracias a los consejos útiles que encontré aquí. Muy recomendado." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="m1" name="Luisa Gómez"
                    description="Evité fraudes al contratar." date="Septiembre 22, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Los testimonios de otros usuarios me ayudaron a tomar una decisión informada." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="h2" name="Pedro Medina"
                    description="Profesionalismo y confianza asegurados." date="Agosto 30, 2023" rating="⭐⭐⭐⭐"
                    comment="Las recomendaciones y consejos fueron clave para encontrar a la persona adecuada." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="m3" name="Marta Sánchez"
                    description="Encontré a alguien honesto." date="Julio 12, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="La información proporcionada me dio confianza en mi elección." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="h3" name="Jorge Pérez"
                    description="Pude evitar estafas fácilmente." date="Junio 5, 2023" rating="⭐⭐⭐⭐"
                    comment="Gracias a los consejos, contraté a una persona de confianza sin problemas." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="m4" name="Ana Ramírez"
                    description="Excelente ayuda para contratar." date="Mayo 19, 2023" rating="⭐⭐⭐⭐"
                    comment="La experiencia de otros usuarios fue fundamental en mi decisión." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="h4" name="Roberto Díaz"
                    description="Recomendaciones valiosas y seguras." date="Abril 28, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Evité malas experiencias gracias a la información disponible." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="m4" name="Elena Martínez"
                    description="Seguridad al contratar personal." date="Marzo 14, 2023" rating="⭐⭐⭐⭐"
                    comment="Los consejos sobre qué buscar en una asesora del hogar fueron muy útiles." />
                </div>
                <div class="slide">
                  <CommentIlustrative :img="h5" name="Alfredo García"
                    description="Encontré confianza al contratar." date="Febrero 25, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Ahora tengo a alguien de confianza gracias a las recomendaciones recibidas." />
                </div>

              </div>
            </div>
</template>

<script lang="ts" setup>
import CommentIlustrative from '@/components/home/CommentIlustrative.vue';

import h1 from '@/assets/img/h01.jpeg'
import m1 from '@/assets/img/m01.jpeg'
import h2 from '@/assets/img/h02.jpeg'
import m3 from '@/assets/img/m03.jpeg'
import h3 from '@/assets/img/h03.jpeg'
import m4 from '@/assets/img/m04.jpeg'
import h4 from '@/assets/img/h04.jpeg'
import m5 from '@/assets/img/m05.jpeg'
import h5 from '@/assets/img/h05.jpeg'
</script>

<style scoped lang="scss">
.bg-gradient-to-r {
  background: linear-gradient(to bottom, #ffd4d4, #fde2e4);
}


@mixin white-gradient {
	background: linear-gradient(to right,  rgb(255, 255, 255) 0%,rgba(255,255,255,0) 10%);
}

$animationSpeed: 70s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 5))}
}


// Styling
.slider {
  background: #ffffff;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  height: 400px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100vw;
  display: flex;
  gap: 4px;
  flex-direction: row; /* Asegura que los elementos estén en fila */
  justify-content: start; /* Alinea al principio del contenedor */

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 400px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    gap: 25px;
    align-items: center;
    width: calc(250px * 14); /* Asegura suficiente ancho */
  }

  .slide {
    width: 250px; /* Define un ancho fijo para las slides */
    height: auto; /* Ajusta la altura automáticamente si es necesario */
  }
}

</style>
