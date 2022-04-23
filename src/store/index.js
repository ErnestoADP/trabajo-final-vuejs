import Vue from 'vue'
import Vuex from 'vuex';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userLogin: null,
    },
    getters: {},
    mutations: {
        SET_USER_LOGIN(state, payload) {
            state.userLogin = payload;
        },
    },

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
            localStorage.setItem("usuario", JSON.stringify(email));
            return true;
        },
        getUserLogin({ commit }) {
            getAuth().onAuthStateChanged((user) => {
                if (user) {
                    commit("SET_USER_LOGIN", user.email);
                }
            });
        },
        async cerrar_Sesion({ commit }) {
            await getAuth()
                .signOut()
                .then(() => {
                    alert("Sesión cerrada!")
                    commit('SET_USER_LOGIN', null);
                });
        },
    },
    modules: {

    }
})