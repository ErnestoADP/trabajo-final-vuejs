<template>
       <div class="carrusel">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="100%"
          img-height="100px"
        >
          <b-carousel-slide
            caption="Jujutsu Kaisen"
            text="Uno de los mejores vendidos el 2021"
            img-src="https://www.gamerfocus.co/wp-content/uploads/2022/02/Jujutsu-Kaisen-0.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Nana"
            text="Descubre este manga en el Rincón de los Virgenes"
            img-src="https://www.themoviedb.org/t/p/original/aWyL3mGDFPYJcy27tPQfTY2z1cP.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="HunterxHunter"
            text="Descubre este clásico en el Rincón de los Virgenes"
            img-src="https://9tailedkitsune.com/wp-content/uploads/2021/02/HunterxHunter-header.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </div>
</template>

<style>
.img-fluid {
    max-width: 100%;
    height: 650px!important;
}

@media only screen and (max-width: 600px) {
  .img-fluid {
   
    height: auto!important;;
}
}
</style>