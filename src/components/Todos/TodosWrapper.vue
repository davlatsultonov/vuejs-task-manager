<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodosWrapper",
})
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="todo-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo-wrapper {
  max-width: 500px;
  width: 100%;
}
</style>