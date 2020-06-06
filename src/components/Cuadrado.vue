<template>

  <section class="src-components-cuadrado">
    <div class="square"
      :style="{'background-color': $store.state.colores[dameIndex()]}"
      @click="mostrarColor"
    >
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-cuadrado',
    props: {
      index: Number,
      actualizarColor: Function,
      ganador: Function
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      mostrarColor() {
        if(this.$store.state.colores[this.index] != this.$store.state.colorAJugar){
          let color = {
            color: "#232323",
            index: this.index
          }
          this.actualizarColor(color)
          this.ganador(false)
        }
        else {
          this.ganador(true)
        }
      },
      dameIndex() {
        return this.index
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cuadrado {
    
  }
  .square {
    width: 30%;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }
</style>
