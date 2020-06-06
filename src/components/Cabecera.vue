<template>

  <section class="src-components-cabecera">
    <div id="header" :style="{'background-color': $store.state.colorGanador}">  
      <h1>The Great
        <br>
        <span id="colorDisplay">{{ $store.state.colorAJugar }}</span>
        <br>
      Guessing Game</h1>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-cabecera',
    props: [],
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
  .src-components-cabecera {
    transition: all 0.3s;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;
  }

  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;

  }

  #colorDisplay {
    font-size: 350%;
  }

</style>
