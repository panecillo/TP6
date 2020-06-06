<template>

  <section class="src-components-botonera">
    <div id="navitagor">
      <button id="reset" @click="iniciarColores">New Colors!</button>
      <span id="message">{{ $store.state.mensaje }}</span>
      <button
        id="easy" 
        @click="iniciarEasy"
        :style="{'background-color': $store.state.colorBotones.botonEasy, 'color': $store.state.colorBotones.letraEasy}">
      easy
      </button>
      <button
        id="hard"
        @click="iniciarHard"
        :style="{'background-color': $store.state.colorBotones.botonHard, 'color': $store.state.colorBotones.letraHard}">
      hard
      </button>
<!--       <pre> Colores: {{ $store.state.colores }}</pre>
      <pre> Dificultad: {{ $store.state.dificultad }}</pre>
      <pre> ColorBotonEasy: {{ $store.state.colorBotones.botonEasy }}</pre>
      <pre> ColorLetraEasy: {{ $store.state.colorBotones.letraEasy }}</pre>
      <pre> ColorBotonHard: {{ $store.state.colorBotones.botonHard }}</pre>
      <pre> ColorLetraHard: {{ $store.state.colorBotones.letraHard }}</pre> -->
<!--       <pre> Color1: {{ $store.state.colores[0] }}</pre>
      <pre> Color2: {{ $store.state.colores[1] }}</pre>
      <pre> Color3: {{ $store.state.colores[2] }}</pre>
      <pre> Color4: {{ $store.state.colores[3] }}</pre>
      <pre> Color5: {{ $store.state.colores[4] }}</pre>
      <pre> Color6: {{ $store.state.colores[5] }}</pre> -->
    </div>  
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-botonera',
    props: {
      modificarHard: Function,
      modificarEasy: Function,
      iniciarColores: Function
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      iniciarEasy() {
        if(this.$store.state.dificultad == this.$store.state.hard) {
          this.modificarEasy();
          this.iniciarColores();
        }
      },
      iniciarHard() {
        if(this.$store.state.dificultad == this.$store.state.easy) {
          this.modificarHard();
          this.iniciarColores();
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-botonera {
    text-align: center;
    margin-top: -18px;
    background-color: white;
  }
  #message {
    color: black;
    display: inline-block;
    width: 20%;
  }
  #navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
    padding:7px
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
</style>
