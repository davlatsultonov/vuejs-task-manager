<script>
import {defineComponent} from 'vue'
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: "TodoInput",
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapMutations({
      addTodo: 'add',
    }),
    handleTodoAddition() {
      if (!this.title) return;

      this.addTodo({
        id: (new Date()).getTime(),
        title: this.title,
        completed: false
      })

      this.title = '';
      this.$refs["todo-input"].focus()
    }
  },
})
</script>

<template>
  <div class="input-group mb-3">
    <input ref="todo-input" type="text" v-model="title" class="form-control" placeholder="Add a new todo..." aria-label="Add a new todo..." aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="handleTodoAddition">Add</button>
  </div>
</template>