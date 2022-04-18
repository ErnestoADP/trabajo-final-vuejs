<template>
  <div>
    <b-container class="bv-example-row " style="text-align: left;">
      <h1 class="mt-5">Mi Cuenta</h1>
      <p>Encuentra toda tu información aquí</p>

      <b-row class="mt-4">
        <b-col class=" usuario">
            <h3>Historial de Pedidos</h3>
            <h6>No haz realizado pedidos todavía</h6>
        </b-col>
         
        <b-col class=" usuario"><h3>Detalles de la cuenta</h3>
        <p>Juanito Perez García</p>
        <h5>Direcciones</h5>
        <p>Calle falsa #123, San Miguel, Santiago, Chile</p>
        <b-button variant="danger">Editar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.b-input{
  margin-bottom: 10px;
}

.usuario{
    border: 2px solid rgb(0, 0, 0);
  box-shadow: 0px 5px 10px #aaaaaa;
  margin: 1rem;
  padding: 1rem;
}
</style>