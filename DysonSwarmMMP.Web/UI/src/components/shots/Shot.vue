<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{title}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <component :is="asyncType"></component>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script>
    export default {
      name: "Shot",
      components: {
        "async-wide-shot": () => import("./Wide.vue"),
        "async-full-shot": () => import("./Full.vue"),
        "async-medium-shot": () => import("./Medium.vue"),
        "async-closeup-shot": () => import("./CloseUp.vue"),
        "async-extremecloseup-shot": () => import("./ExtremeCloseUp.vue")
      },
      props: {
        type: String,
        title: String
      },
      computed: {
        asyncType: function() {
          return this.type ? `async-${this.type.toLowerCase()}-shot` : "";
        }
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
