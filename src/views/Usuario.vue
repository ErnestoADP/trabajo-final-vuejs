<template>
  <div>
    <b-container class="bv-example-row " style="text-align: left;">
      <h1 class="mt-5">Bienvenido <span>{{ userLogin }}</span> </h1>
      <p>Encuentra toda tu información aquí</p>

      <b-row class="mt-4">
        <b-col class=" usuario">
            <h3>Historial de Pedidos</h3>
            <h6>No has realizado pedidos todavía</h6>
        </b-col>

    <b-row>
      
    </b-row>

<!---bmodal--->
            <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title> Agregando Dirección </template>
          <div>
            <b-form-input
              class="m-1"
              v-model="direccion.nombreCalle"
              placeholder="Calle"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="direccion.numero"
              placeholder="Número"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="direccion.departamento"
              placeholder="Departamento"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="direccion.comuna"
              placeholder="Comuna"
            ></b-form-input>
            
            <div class="m-2">
              <b-button @click="addDireccion" class="m-1" variant="success"
                >Registrar</b-button
              >
              <b-button class="m-1" variant="danger"
                >Limpiar Formulario</b-button
              >
              <b-button class="m-1" variant="warning"
                >Limpiar Validación</b-button
              >
            </div>
          </div>
        </b-modal>




         
        <b-col class=" usuario"><h3>Detalles de la cuenta</h3>
       
       
        <h5 class="mt-2">Direcciones</h5>
        <b-row>
      <b-col cols="6">
        <section>
      <table  class="tabla">
        <thead>
          <tr class="m-5">
            <th>Calle</th>
            <th>Número</th>
            <th>Departamento</th>
            <th>Comuna</th>
            <th clas="texto"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(direccion, i) in direcciones" :key="i">
            <td>{{ direccion.data.nombreCalle }}</td>
            <td>{{ direccion.data.numero }}</td>
            <td>{{ direccion.data.departamento }}</td>
            <td>{{ direccion.data.comuna }}</td>
            <td><b-button
                class="buttons-table"
                squared
                variant="outline-danger"
                @click="borrar(direccion.id)"
                ><b-icon icon="trash" scale="1" variant="dark"></b-icon
              ></b-button></td>
          </tr>
        </tbody>
      </table>
        </section>
      </b-col> 
    </b-row>

    
       
        
        <b-button @click="$bvModal.show('bv-modal-example')" class="ms-1" variant="danger" >Agregar dirección</b-button>
        </b-col>
        
      </b-row>
      
      




    </b-container>





  </div>
</template>

<script>

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

import { mapActions, mapState } from "vuex";

export default {
  name: "Usuario",
  data() {
    return {
      direccion: {
        nombreCalle: "",
        numero: "",
        departamento: "",
        comuna: "",
      },
      direccionSeleccionado: {
        id: "",
        data: {
        nombreCalle: "",
        numero: "",
        departamento: "",
        comuna: "",
       
        },
      },
      direcciones: [],
      modalShow: false,
    };
  },

  mounted() {
    this.getUserLogin();
  },
  
  methods: {
    ...mapActions(["getUserLogin"]),

    async addDireccion() {
      alert("Regristro con exito!");
      const db = getFirestore();

      const coleccion = collection(db, "direcciones");

      const documento = this.direccion;
      await addDoc(coleccion, documento);
    },

    async getDireccion() {
      const db = getFirestore();
      const coleccion = collection(db, "direcciones");
      const q = query(coleccion);
      onSnapshot(q, (querySnapshot) => {
        const direcciones = [];
        querySnapshot.forEach((doc) => {
          const direccion = { id: doc.id, data: doc.data() };
          direcciones.push(direccion);
        });
        this.direcciones = direcciones;
      });
    },

    ///BORRAR
    async borrar(id) {
      const db = getFirestore();
      const coleccion = "direcciones";
      await deleteDoc(doc(db, coleccion, id));
      alert("Direccion Eliminada");
    },



  },
 

mounted() {
    this.getDireccion();
  },


  computed: {
    ...mapState(["userLogin","direcciones"]),
    
  },
};
</script>








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