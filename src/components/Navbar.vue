
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img src="../assets/img/LogoPrueba.png" width="200px" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav style="margin-left: auto" class="ml-auto">
          <b-nav-item right to="/Carrito">
            <b-icon style="margin-right: 10px" icon="basket"></b-icon>
          </b-nav-item>
          <div v-if="userLogin != null">
            <span style="color: #fff; margin-right: 15px"
              >Hola, {{ userLogin }}</span
            >
            <b-button @click="cerrarSesion" variant="outline-primary"
              >Cerrar sesión</b-button
            >
          </div>
          <div v-else>
            <b-button to="/Registrate" variant="primary" style="margin-right: 15px;">Regístrate</b-button>
            <b-button @click="ingresar" variant="success"
              >Inicia sesión</b-button
            >
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getUserLogin();
  },
  methods: {
    ...mapActions(["getUserLogin", "cerrar_Sesion"]),
    cerrarSesion() {
      this.cerrar_Sesion();
      this.$router.push("/");
    },
    ingresar() {
      this.$router.push("/Iniciar_sesion");
    },
  },
  computed: {
    ...mapState(["userLogin"]),
  },
};
</script>
<style scoped>
.navbar{
border-bottom:1px solid rgb(78, 78, 78);
}


</style>
