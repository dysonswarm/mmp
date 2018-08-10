<template>
  <section class="container">
    <div class="columns">
     <div class="column has-background-warning">
        <Shot class="shot" :type="$store.state.type" :title="$store.state.title" />
      </div>
      <div class="column is-3 has-background-danger"></div>
    </div>
  </section>
</template>

<script>
  import Shot from './shots/Shot';
  export default {
    name: "Board",
    components: {
      Shot
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
