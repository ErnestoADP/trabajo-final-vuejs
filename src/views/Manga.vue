<template>
  <b-container class="bv-example-row mt-4 card-home">
    <h1>{{ this.manga.nombre }}</h1>
    <div class="info">
      <p class="text-manga">Descripción: {{ this.manga.descripcion }}</p>
      <p class="text-manga">Autor: {{ this.manga.autor }}</p>
      <p class="text-manga">Genero: {{ this.manga.genero }}</p>
      <p class="text-manga">Editorial: {{ this.manga.editorial }}</p>
    </div>

    <b-row>
      <b-col
        ><div class="card-parent">
          <b-card
            v-for="tomo in this.manga.tomos"
            :key="tomo.id"
            :img-src="tomo.imagen"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem"
            class="mb-2 card-interior"
          >
            <b-card-text>
              <h3>Numero: {{ tomo.numero }}</h3>
            </b-card-text>
            <hr />
            <b-card-text> <b>Precio:</b> {{ tomo.precio }} </b-card-text>
            <hr />
            <b-card-text> <b>Stock:</b> {{ tomo.stock }} </b-card-text>
            <hr />

            <b-button
              href="#"
              @click="agregarCarrito(tomo)"
              variant="outline-success"
              >Agregar al Carrito</b-button
            >
          </b-card>
        </div></b-col
      >
    </b-row>
  </b-container>
  <!-- End Container -->
</template>

<script>
import sagasData from "../assets/api/database.json";
export default {
  name: "Manga",
  data() {
    return {
      manga: {},
      tomosAgregados: [],
    };
  },
  mounted() {
    // obtener id desde la ruta
    let id = this.$route.params.id;

    // poner coleccion de mangas en una variable
    let coleccion = sagasData.sagas;

    // obtener solo un item de la coleccion por la id
    this.manga = coleccion.find((item) => item.id == id);
  },

  methods: {
    agregarCarrito(tomo) {
      const tomosAgregados = [];
      const carrito = JSON.parse(localStorage.getItem("carrito"));

      if (carrito === null || carrito.length === 0) {
        tomosAgregados.push(tomo);
        localStorage.setItem("carrito", JSON.stringify(tomosAgregados));
      } else {
        carrito.push(tomo);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }

      this.$store.commit('SET_CANTIDAD_CARRITO', carrito.length);
    },
  },
};
</script>

<style>
h1 {
  text-transform: uppercase;
}
h1,
.text-manga {
  color: white;
  text-shadow: 0 0 7px #fff, 0 0 42px #0fa, 0 0 92px #0fa, 0 0 151px #0fa;
}

.text-manga {
  font-size: 1.4rem;
}
</style>
