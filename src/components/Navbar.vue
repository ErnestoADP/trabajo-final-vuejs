<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/" href="#"
        >
        <img src="../assets/img/LogoPrueba.png" width="200px" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav style="margin-left: auto" class="ml-auto">
          <b-nav-item class="carrito" right to="/Carrito">
            <b-icon style="margin-right: 10px" icon="basket"></b-icon>
            <span v-show="mostrarCountCarrito">{{ countCarrito }}</span>
          </b-nav-item>
          <div v-if="userLogin != null">
            <span style="color: #fff; margin-right: 15px"
              >Hola, {{ userLogin }}</span
            >

            <b-button @click="cerrarSesion" variant="outline-primary"
              >Cerrar sesión</b-button
            >
            <b-button
              class="btn-perfil"
              to="/Usuario"
              variant="outline-success"
            >
              <b-icon
                to="/Usuario"
                icon="person-fill"
                scale="2"
                variant="outline-success"
              ></b-icon
            ></b-button>
          </div>
          <div v-else>
            <b-button
              to="/Registrate"
              variant="outline-primary"
              style="margin-right: 15px"
              >Regístrate</b-button
            >
            <b-button @click="ingresar" variant="outline-success"
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
  data() {
    return {
      countCarrito: 0,
      mostrarCountCarrito: true,
    };
  },
  mounted() {
    this.getUserLogin();
    // this.countCarrito = this.$store.getters.carritoCount;
    this.countCarrito = JSON.parse(localStorage.getItem('carrito')).length;
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
.navbar {
  border-bottom: 1px solid rgb(78, 78, 78);
}

.carrito {
  position: relative;
}

.carrito span {
  position: absolute;
  top: -0.6em;
  right: 0.4em;
  width: 40%;
  background-color: #dc3545;
  border-radius: 60%;
}

.btn-perfil {
  margin-left: 5px;
}
</style>
