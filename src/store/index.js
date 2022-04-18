import Vue from 'vue'
import Vuex from 'vuex';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async agregar_Usuario(context, usuario) {

            const { email, password } = usuario;
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Usuario creado!");
            return true;
        },

        async iniciar_Sesion(context, usuario) {

            const { email, password } = usuario;
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            alert("Sesión iniciada con exito!");
            return true;
        },
    },
    modules: {}
})