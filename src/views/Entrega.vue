<template>
  <b-container>
    <h1 class="mt-4 bv-example-row" style="text-align: left">
      Información de entrega
    </h1>
    <b-row class="my-1">
      <b-col col lg="4" md="12">
        <b-input-group prepend="Nombre" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
        <b-input-group prepend="Region" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
        <b-input-group prepend="Nombre de calle" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
        <b-input-group prepend="Dpto/Block/Piso" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols lg="8" md="12">
        <b-input-group prepend="Apellido" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
        <b-input-group prepend="Comuna" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
        <b-input-group prepend="Número de calle" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
        <b-input-group prepend="Ciudad" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <h1 class="mt-4 bv-example-row" style="text-align: left">
      Información de contacto
    </h1>
    <b-row class="my-1">
      <b-col col lg="4" md="12">
        <b-input-group prepend="Correo electrónico" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols lg="8" md="12">
        <b-input-group prepend="Teléfono" class="mt-3">
          <b-form-input></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <h1 class="mt-4 bv-example-row" style="text-align: left">
      Información de contacto
    </h1>
    <b-row class="my-1">
      <b-col col lg="4" md="12" style="display: flex;">
        <img
          src="../assets/img/icon-adidas-redcompra.png"
          width="200px"
          alt="Kitten"
        />
      </b-col>
      <b-col cols lg="8" md="12"> </b-col>
    </b-row>
    <div style="float: left">
      <b-button variant="success" class="mt-4">Hacer pedido</b-button>
    </div>
  </b-container>
</template>

<style>
.cuadro1 {
  background: #d3362f;
  padding: 20px 40px !important;
  border-radius: 10px 0 0 10px;
  text-align: left;
  color: white;
}

.cuadro2 {
  padding: 50px;
  border-radius: 10px 0 0 10px;
}
</style>