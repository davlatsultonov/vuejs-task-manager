<script>
import {defineComponent} from 'vue'
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";
import {links} from "./router.js";

export default defineComponent({
  name: "App",
  components: {Navbar, Home},
  data() {
    return {
      links: links
    }
  }
})
</script>

<template>
  <div class="container">
    <Navbar :links="links" />
    <div class="mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
