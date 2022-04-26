<template>
  <div class="cuerpo">
    <div>
      <div class="nose">
        <h1 style="margin: 20px 0">Tu Carrito</h1>
      </div>
    </div>
    <!--------------------------------------------------------TABLA CON LOS DATOS------------------------------------------------------------------------------->
    <section>
      <p class="total">{{ sumaPrecio }}</p>
      <b-button @click="pagar(sumaPrecio)">Pagar</b-button>
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
            <td class="second-col">
              <div>
                <h5>{{ item.precio }}</h5>
              </div>
            </td>

            <td class="third-col">
              <!----ELIMINAR------>
              <b-button
                class="buttons-table"
                @click="eliminarProducto(item.numero)"
                squared
                variant="danger"
                ><b-icon icon="trash" scale="1" variant="light"></b-icon
              ></b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
export default {
  name: "Carrito",

  data() {
    return {
      productosSeleccionados: {},
      sumaPrecio: 0,
    };
  },
  methods: {
    eliminarProducto(id) {
      const productos = this.productosSeleccionados;
      this.productosSeleccionados = [];
      this.productosSeleccionados = productos.filter((e) => e.numero != id);

      localStorage.setItem(
        "carrito",
        JSON.stringify(this.productosSeleccionados)
      );
    },
    pagar(monto){
      console.log(monto);
    }
  },
  mounted() {
    this.sumaPrecio = 0;
    this.productosSeleccionados = JSON.parse(localStorage.getItem("carrito"));

    this.productosSeleccionados.forEach((element) => {
      this.sumaPrecio += element.precio;
    });
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
  width: 50%;
  margin: auto;
  margin-bottom: 150px;
  border: 2px solid #fff;
}
div.card-body {
  display: none;
}
.first-col {
  width: 20%;
}
.second-col,
.third-col {
  width: 10%;
}

.texto {
  text-align: center;
}
.buttons-table {
  margin: 0.1rem;
}
table {
  margin: 0.4rem;
}
th,
td {
  padding: 4px 1px 3px 1px;
  border-bottom: 1px solid;
  box-shadow: 0px 1px 0px #000000;
  color: #fff;
  border: 2px solid #fff;
}
</style>
