<template>

  <section class="src-components-juego">
    <div id="body">
      <Cabecera />
      <Botonera
        :modificarHard="modificarHard"
        :modificarEasy="modificarEasy"
        :iniciarColores="iniciarColores"
      />
      <Contenedor 
        :ganador="ganador"
        :actualizarColor="actualizarColor"
        :colores="colores"
      />
    </div>  
  </section>

</template>

<script lang="js">

  import Cabecera from './Cabecera.vue'
  import Botonera from './Botonera.vue'
  import Contenedor from './Contenedor.vue'

  export default  {
    name: 'src-components-juego',
    props: [],
    components : {
      Cabecera,
      Botonera,
      Contenedor
    },
    mounted () {
      this.iniciarColores();
      console.log(this.colores)
    },
    data () {
      return {
        colorBotonesAux : {
            botonEasy: "rgb(251, 251, 251)",
            botonHard: "rgb(70, 130, 180)",
            letraEasy: "rgb(70, 130, 180)",
            letraHard: "rgb(251, 251, 251)",
            dificultad: this.hard
        },
        hard: 6,
        easy: 3,
        colores: []
      }
    },
    methods: {
      iniciarColores() {
        this.colores = []
        this.$store.dispatch('modificarColorGanador', 'steelblue')
        this.mensaje = ""
        for(let i = 0; i < this.$store.state.dificultad; i++){
          this.colores[i] = this.generarStringColor();
        }
        this.$store.dispatch('modificarColores', this.colores)
        this.$store.dispatch('modificarColorAJugar', this.generarColorAJugar())
      },
      mostrarDificultad() {
        return this.dificultad
      },
      modificarHard() {  
        this.colorBotonesAux.botonEasy = "rgb(251, 251, 251)";
        this.colorBotonesAux.botonHard = "rgb(70, 130, 180)";
        this.colorBotonesAux.letraEasy = "rgb(70, 130, 180)";
        this.colorBotonesAux.letraHard = "rgb(251, 251, 251)";
        this.colorBotonesAux.dificultad = this.hard;
  
        this.$store.dispatch('modificarDificultad', this.colorBotonesAux)

      },
      modificarEasy() {
        this.colorBotonesAux.botonEasy = "rgb(70, 130, 180)";
        this.colorBotonesAux.botonHard = "rgb(251, 251, 251)";
        this.colorBotonesAux.letraEasy = "rgb(251, 251, 251)";
        this.colorBotonesAux.letraHard = "rgb(70, 130, 180)";
        this.colorBotonesAux.dificultad = this.easy;
  
        this.$store.dispatch('modificarDificultad', this.colorBotonesAux)
      },
      generarStringColor() {
        return "rgb(" + this.generarInt() + ", " + this.generarInt() + ", " + this.generarInt() + ")"
      },
      generarInt() {
        return Math.floor(Math.random() * 256);
      },
      generarColorAJugar() {
        return this.$store.state.colores[Math.floor(Math.random() * (this.$store.state.dificultad - 1))]
      },
      ganador(resultado) {
        if(resultado) {
          this.$store.dispatch('modificarColorGanador', this.$store.state.colorAJugar)
          this.$store.dispatch('modificarMensaje', 'Ganaste!')
          let coloresGanadores = []
          for (let index = 0; index < this.$store.state.colores.length; index++) {
            coloresGanadores[index] = this.$store.state.colorGanador
          }
          this.$store.dispatch('modificarColores', coloresGanadores)
        }
        else {
          this.$store.dispatch('modificarMensaje', "Intentalo de nuevo!")
        }
      },
      actualizarColor(color) {
        this.$store.dispatch('actualizarColor', color)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-juego {
    background: #232323;
  }

  #body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";
  }
</style>
