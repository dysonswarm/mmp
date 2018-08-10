<template>
  <div>
    <Shot :type="$store.state.type" :title="$store.state.title" />
    <button @click="$store.commit('changeShot', { type: 'wide', title: 'Wide'})">Wide</button>
    <button @click="$store.commit('changeShot', { type: 'full', title: 'Full'})">Full</button>
    <button @click="$store.commit('changeShot', { type: 'medium', title: 'Medium'})">Medium</button>
    <button @click="$store.commit('changeShot', { type: 'closeup', title: 'CloseUp'})">CloseUp</button>
    <button @click="$store.commit('changeShot', { type: 'extremecloseup', title: 'ExtremeCloseUp'})">ExtremeCloseUp</button>
  </div>
</template>

<script>
  import Shot from './shots/Shot';
  export default {
    name: "HelloWorld",
    components: {
      Shot
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
