<script>
import {defineComponent} from 'vue'
import {mapMutations} from "vuex";
import { BIconPencil, BIconPencilFill, BIconTrash3, BIconXLg } from 'bootstrap-icons-vue';
import TodoListItemButton from "./TodoListItemButton.vue";

export default defineComponent({
  name: "TodoListItem",
  components: {TodoListItemButton, BIconPencilFill, BIconPencil, BIconTrash3, BIconXLg},
  props: {
    todo: Object,
    readOnly: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      editing: false,
      editingTitle: ''
    }
  },
  created() {
    this.editingTitle = this.todo.title;
  },
  methods: {
    ...mapMutations({
      removeTodo: 'remove',
      editTodo: 'edit',
      toggleTodo: 'toggle',
    }),
    handleTodoEdit(todo) {
      if (todo.title === this.editingTitle) {
        this.handleResetEditing();
        return;
      }
      if (!this.editingTitle) return;

      this.editTodo({id: todo.id, title: this.editingTitle });
      this.handleResetEditing()
    },
    handleResetEditing() {
      this.editing = false;
    },
  },
})
</script>

<template>
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <div class="flex-grow-1 d-flex align-items-center pe-2">
      <input :disabled="readOnly" class="form-check-input mt-0 me-2" type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" aria-label="Checkbox for following text input">
      <input v-if="editing" type="text" class="form-control" v-model="editingTitle"/>
      <span v-else :class="`ps-2 ${todo.completed ? 'text-decoration-line-through' : null}`">{{ todo.title }}</span>
    </div>

    <div class="flex-shrink-1 border-start ps-2">
      <template v-if="editing">
        <TodoListItemButton :disabled="readOnly" type="btn-outline-danger" :on-click="handleResetEditing">
          <BIconXLg/>
        </TodoListItemButton>
        <TodoListItemButton :disabled="readOnly" type="btn-outline-dark" :on-click="() => handleTodoEdit(todo)">
          <BIconPencilFill/>
        </TodoListItemButton>
      </template>
      <template v-else>
        <TodoListItemButton :disabled="readOnly" type="btn-outline-danger" :on-click="() => removeTodo(todo.id)">
          <BIconTrash3/>
        </TodoListItemButton>
        <TodoListItemButton :disabled="readOnly" type="btn-outline-dark" :on-click="() => editing = true">
          <BIconPencil />
        </TodoListItemButton>
      </template>
    </div>
  </li>
</template>