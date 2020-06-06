import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        colorGanador: 'steelblue',
        colorAJugar: "",
        colores: [],
        hard: 6,
        easy: 3,
        dificultad: 6,
        colorBotones : {
            botonEasy: "rgb(251, 251, 251)",
            botonHard: "rgb(70, 130, 180)",
            letraEasy: "rgb(70, 130, 180)",
            letraHard: "rgb(251, 251, 251)"
        },
        mensaje: ""
    },
    actions : {
        modificarDificultad({commit}, obj) {
            commit('modificarDificultad', obj)
        },
        modificarColorGanador({commit}, color) {
            commit('modificarColorGanador', color)
        },
        modificarColores({commit}, colores) {
            commit('modificarColores', colores)
        },
        modificarColorAJugar({commit}, color) {
            commit('modificarColorAJugar', color)
        },
        modificarMensaje({commit}, mensaje) {
            commit('modificarMensaje', mensaje)
        },
        actualizarColor({commit}, color) {
            commit('actualizarColor', color)
        }
    },
    mutations : {
        modificarDificultad(state, obj) {
            state.colorBotones.botonEasy = obj.botonEasy
            state.colorBotones.botonHard = obj.botonHard
            state.colorBotones.letraEasy = obj.letraEasy
            state.colorBotones.letraHard = obj.letraHard
            state.dificultad = obj.dificultad
        },
        modificarColorGanador(state, color) {
            state.colorGanador = color
        },
        modificarColores(state, colores) {
            state.colores = colores
        },
        modificarColorAJugar(state, color) {
            state.colorAJugar = color
        },
        modificarMensaje(state, mensaje) {
            state.mensaje = mensaje
        },
        actualizarColor(state, color) {
            state.colores.splice(color.index, 1, color.color)
        }

    }
})