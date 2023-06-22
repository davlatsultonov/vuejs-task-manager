<script>
import {defineComponent} from 'vue'
import TodoInput from "../components/Todos/TodoInput.vue";
import TodosList from "../components/Todos/TodosList.vue";
import TodosWrapper from "../components/Todos/TodosWrapper.vue";

export default defineComponent({
  name: "TodosPage",
  components: {TodosWrapper, TodosList, TodoInput},
})
</script>

<template>
  <TodosWrapper>
    <TodoInput />
    <TodosList />
  </TodosWrapper>
</template>

