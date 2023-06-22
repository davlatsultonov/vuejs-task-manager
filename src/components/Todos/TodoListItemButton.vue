<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodoListItemButton",
  props: ['type', 'onClick', 'disabled']
})
</script>

<template>
  <button :disabled="disabled" :class="`ms-1 btn ${type}`" @click.stop="onClick">
    <slot />
  </button>
</template>