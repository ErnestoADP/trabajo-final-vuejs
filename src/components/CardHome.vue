<template>
  <!-- Cards Container -->
  <b-container class="bv-example-row mt-4 card-home">
    <input type="" value="" v-model="search" />
    <p v-show="mostrarMensaje">No se encontro el resultado</p>
    <b-row>
      <b-col>
        <div class="card-parent">
          <b-card
            v-for="item in filteredProducts"
            :key="item.id"
            title=""
            :img-src="item.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2 card-interior img-body-card"
          >
            <b-card-text>
              <h3>{{ item.nombre }}</h3>
            </b-card-text>

            <hr />
            <b-button
              href="#"
              class="buttom-card-home"
              squared
              variant="outline-dark"
              @click="mangaDetalle(item.id)"
              >Ver tomos disponibles</b-button
            >
          </b-card>
          
        </div></b-col
      >
    </b-row>
  </b-container>
  <!-- End Container -->
</template>

<script lang="ts">
import sagasData from "../assets/api/database.json";
export default {
  data() {
    return {
      mostrarMensaje: false,
      search: "",
      coleccion: sagasData,
    };
  },
  methods: {
    mangaDetalle(id) {
      this.$router.push({ path: "/manga/" + id });
    },
  },
  computed: {
    filteredProducts() {
      const resultados = this.coleccion.sagas.filter((item) =>
        item.nombre.toLowerCase().includes(this.search)
      );
     
        if (resultados.length === 0){
           this.mostrarMensaje = true;

        }else{
           this.mostrarMensaje = false;
          return resultados;

        }

    },
  },
  mounted() {},
};
</script>

<style>
.card-home {
  padding-bottom: 100px;
}
.card-parent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
.card-body {
  background-color: rgb(236, 236, 236);
}
div > .card-interior {
  width: 100%;
  transition: transform 0.2s;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 4px;
  margin: 40px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-interior:hover {
  animation: pulsate 1s ease-in-out;
}
@keyframes pulsate {
  0% {
    box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 42px #bc13fe, 0 0 82px #bc13fe,
      0 0 92px #bc13fe, 0 0 100px #bc13fe, 0 0 121px #bc13fe;
  }
}

img.card-img-top {
  width: 100%;
  height: 450px;
}
</style>
