<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Navbar",
  props: ['links'],
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mt-2 rounded-2">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item me-3" v-for="{label, link} in links">
            <router-link class="nav-link" :active-class="$route.path === link ? 'active' : ''" aria-current="page" :to="link">{{ label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>