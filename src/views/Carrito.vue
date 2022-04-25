<template>
  <div class="cuerpo">
    <div>
      <div class="nose">
        <h1 style="margin: 20px 0">Tu Carrito</h1>
      </div>
    </div>
    <!--------------------------------------------------------TABLA CON LOS DATOS------------------------------------------------------------------------------->
    <section>
      <table class="tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in productosSeleccionados" :key="item.id">
            <td class="first-col">
              <div class="m-2">
                <b-card :img-src="item.imagen" fluid alt="Fluid image"></b-card>
              </div>
            </td>
            <td>
              <div>
                <h5>{{ item.precio }}</h5>
              </div>
            </td>

            <td>
              <!----ELIMINAR------>
              <b-button
                class="buttons-table"
                @click="eliminarProducto(item.numero)"
                squared
                variant="danger"
                ><b-icon icon="trash" scale="1" variant="light"></b-icon
              ></b-button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div class="total"></div>
    </section>
    <div class="mt-5">
      <b-container class="bv-example-row">
        <b-row>
          <b-col></b-col>
          <b-col></b-col>
          <b-col><h3 class="total">Total Compra:</h3></b-col>
          <b-col class="me-5"
            ><h3>$7.990</h3>
            <b-button variant="danger">Comprar</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carrito",

  data() {
    return {
      productosSeleccionados: {},
    };
  },
  methods: {
    eliminarProducto(id) {
      const productos = this.productosSeleccionados; 
      this.productosSeleccionados = [];
      this.productosSeleccionados = productos.filter((e) => e.numero != id); 

      localStorage.setItem('carrito', JSON.stringify(this.productosSeleccionados));
    },
  },
  mounted() {
    this.productosSeleccionados = this.$store.state.productosCarrito;

    if (!this.productosSeleccionados) {
      this.productosSeleccionados = JSON.parse(localStorage.getItem("carrito"));
    }
  },
};
</script>

<style scoped>
p {
  border-radius: 0.3rem;
  padding: 0.2rem;
  border: 0.1rem solid;
  margin: 0.4rem;
  width: 100%;
  box-shadow: 1px 2px 1px #aaaaaa;
  text-align: left;
}
.total {
  color: rgba(255, 0, 0, 0.773);
  font-size: 2.3em;
  font-weight: 700;
}

.nose {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cuerpo {
  width: 70%;
  margin: auto;
}
.tabla {
  width: 100%;
}
.first-col {
  width: 20%;
}
.texto {
  text-align: center;
}
.buttons-table {
  margin: 0.1rem;
}
table {
  border: 2px solid rgb(0, 0, 0);
  box-shadow: 0px 5px 10px #aaaaaa;
  margin: 0.4rem;
}
th,
td {
  padding: 4px 1px 3px 1px;
  border-bottom: 1px solid;
  box-shadow: 0px 1px 0px #000000;
}
</style>
