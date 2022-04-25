<template>
  <div class="home">
    <div>
      <!--Carrusel-->
      <Carrusel />
      <h1 class="mt-4">MANGAS DISPONIBLES</h1>
    </div>
   
    <CardHome />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardHome from "@/components/CardHome";
import Carrusel from "@/components/Carrusel";
import sagasData from "../assets/api/database.json";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CardHome,
    Carrusel,
  },
  methods: {

  },
};
</script>
<style scoped>
.logo {
  background-color: rgb(31, 31, 31);
}
h1 {
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
@media only screen and (max-width: 600px) {
  .mt-4 {
   
    font-size: 30px;
}
}
</style>
