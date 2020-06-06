<template>

  <section class="src-components-contenedor">
    <div id="container">
      <div v-for="(color, index) in colores" :key="index">
        <Cuadrado 
          :index="index"
          :ganador="ganador"
          :actualizarColor="actualizarColor"
        />
      </div>
    </div>
  </section>

</template>

<script lang="js">

  import Cuadrado from './Cuadrado.vue'

  export default  {
    name: 'src-components-contenedor',
    props: {
      ganador: Function,
      actualizarColor: Function,
      colores: Array
    },
    components: {
      Cuadrado
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-contenedor {
    background: black;
  }
  #container {
    background: black;
  }
</style>
