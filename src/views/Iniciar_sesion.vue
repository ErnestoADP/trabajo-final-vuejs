<template>
  <div>
    <b-container class="bv-example-row" style="text-align: left;">
      <h1 class="mt-5">Inicia Sesión</h1>
      <p>¡Qué bueno tenerte de vuelta!</p>

      <b-row class="mt-4">
        <b-col>
          <b-input-group class="b-input" prepend="Correo electrónico">
            <b-form-input v-model="usuario.email"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Contraseña">
            <b-form-input type="password" v-model="usuario.password"></b-form-input>
          </b-input-group>
          <b-button @click="iniciarSesion" class="mt-3 b-input" variant="info">Ingresar</b-button></b-col>
          <p>¿Aún no tienes cuenta? <a>Regístrate</a> </p>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions} from "vuex";

export default {
  methods: {
    ...mapActions(["iniciar_Sesion"]),
      async iniciarSesion(){
    const{ usuario } = this;
    try{
    await this.iniciar_Sesion(usuario);
    this.$router.push("/")
    } catch (error) {
       alert("Ups! Algo salió mal");
       console.log(error);
    }
    
  },
  },
  data(){
    return{
      usuario: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style>
.b-input{
  margin-bottom: 10px;
}
</style>