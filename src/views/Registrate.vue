<template>
  <div>
    <b-container class="bv-example-row" style="text-align: left;">
      <h1 class="mt-5">Regístrate</h1>
      <p>Ingresa tus datos personales y disfruta de una experiencia de compra más rápida.</p>

      <b-row class="mt-4">
        <b-col>
          
          <b-input-group class="b-input" prepend="Correo electrónico">
            <b-form-input v-model="usuario.email" ></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Constraseña">
            <b-form-input 
          
            type="password" 
            v-model="usuario.password"></b-form-input>
          </b-input-group>
          <b-button @click="agregarUsuario" class="mt-3 b-input" variant="info" >Registrame</b-button></b-col>
          <p>¿Ya tienes cuenta? <a>Inicia sesión</a> </p>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions} from "vuex";

export default {

methods: {
  ...mapActions(["agregar_Usuario"]),

  async agregarUsuario(){
    const{ usuario } = this;
    try{
    await this.agregar_Usuario(usuario);
    this.$router.push("/iniciar_sesion")
    } catch (error) {
       alert("Ups! Algo salió mal");
       console.log(error);
    }
    
  },
},

  data() {
    return{
      usuario: {
        email: "",
        password: "",
      }
    }

  }
}

</script>

<style>
.b-input{
  margin-bottom: 10px;
}
</style>