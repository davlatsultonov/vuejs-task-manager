<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  name: "TodosList",
  props: {
    readOnly: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  components: {TodoListItem},
  computed: {
    ...mapGetters({
      todos: "all",
    })
  },
})
</script>

<template>
  <ul class="list-group list-group--todos">
    <TodoListItem :read-only="readOnly" v-for="todo in todos" :todo='todo'/>
  </ul>
</template>

<style lang="scss">
.list-group--todos {
  min-width: 100%;
}
</style>