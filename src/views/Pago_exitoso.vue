<template>
  <div class="pagos">
    <b-container>
      <b-row class="my-1 mt-4" style="background: white; border-radius: 10px">
        <b-col col lg="4" md="12" class="cuadro1">
          <h2>Lo que compraste</h2>
          <hr />
          <div class="card-venta-padre">
            <div
            class="div-venta"
            v-for="item in productosComprados"
            :key="item.id"
          >
            <p >Tomo: {{ item.numero }}</p>
            <b-card class="card-venta" :img-src="item.imagen"></b-card>
          </div>
          </div>
          

          <hr />
          <div style="display: flex">
            <b-icon style="margin-right: 10px" icon="cash"></b-icon>
            <b>${{ precioFinal }}</b>
          </div>
          <hr />
          <div style="display: flex">
            <b-icon style="margin-right: 10px" icon="calendar-check"></b-icon>
            <p>Fecha de entrega:</p>
            <b> 10 de Mayo 2022</b>
          </div>
        </b-col>
        <b-col cols lg="8" md="12" class="cuadro2">
          <h1 style="color: #d3362f; margin-bottom: 30px; font-weight: bold">
            PAGO REALIZADO CON EXITO
          </h1>
          <img src="../assets/img/11_Success-1.png" width="70%" alt="Kitten" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      precioFinal: 0,
      productosComprados: [],
    };
  },
  mounted() {
    this.productosComprados = JSON.parse(localStorage.getItem("carrito"));

    this.productosComprados.forEach((element) => {
      this.precioFinal += element.precio;
    });
  },
};
</script>

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
  background-color: rgba(0, 0, 0, 0.439);
}

.pagos {
  margin-bottom: 280px;
}
.card-venta-padre{
  display: flex;
  flex-wrap: wrap;
}
.card-venta-padre p{
  margin: 1em 0;
}

.div-venta  {
 width:30%;
margin: auto;

}
.div-venta img{
  width:100%;
}
.card-venta .card-body{
  display: none;
}
</style>
