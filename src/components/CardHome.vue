<template>
  <!-- Cards Container -->
  <b-container class="bv-example-row mt-4 card-home">
    <div class="inputSearch">
       <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input v-model="search" type="search" placeholder="Busca tu manga aquí"></b-form-input>
    </b-input-group>
    </div>
    
    
    
    <p class="mensajeNoEncontrado" v-show="mostrarMensaje">No se encontro el resultado</p>
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
              variant="outline-success"
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

div > .card-interior {
  width: 100%;
 background-color: rgba(0, 0, 0, 0.567);
 color:white;
  border: 5px solid;
  border-image: linear-gradient(
    #2fff32,
    #fcfa4d,
    #0243cf) 1;
  animation: rotate 2.5s
   ease-in
  infinite;
  
  margin: 40px;


}

@keyframes rotate {
  50%{
      border-image: 
      linear-gradient(
        360deg,
     #2fff32,
    #fcfa4d,
    #0243cf) 1;
  }
}



img.card-img-top {
  width: 100%;
  height: 450px;
 border-radius:0;
}

.mensajeNoEncontrado{
  animation: flicker 1.5s infinite alternate;
  font-size: 4em;
  color: #fff;
  text-shadow: 0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
}
.inputSearch{
  width: 56%;
  margin: auto;
  
}


</style>
