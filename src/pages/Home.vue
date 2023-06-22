<script>
import {defineComponent} from 'vue'
import TodosList from "../components/Todos/TodosList.vue";
import {mapGetters, mapMutations} from "vuex";
import TodosWrapper from "../components/Todos/TodosWrapper.vue";

export default defineComponent({
  name: "Home",
  components: {TodosWrapper, TodosList},
  methods: {
    ...mapMutations(['setFilterState'])
  },
  computed: {
    ...mapGetters({
      filterState: "getFilterState",
      todosCount: "count"
    })
  }
})
</script>

<template>
  <div class="mb-3 text-center">
    <button :class="`btn btn-${label === filterState ? '' : 'outline-'}dark me-3`"
            v-for="label in ['all', 'active', 'completed']"
            :disabled="todosCount < 1"
            @click="setFilterState(label)"
    >
      {{ label[0].toUpperCase() + label.slice(1) }}
    </button>
  </div>
  <TodosWrapper>
    <TodosList :read-only="true" v-if="todosCount"/>
    <div class="d-flex justify-content-center mt-4" v-else>
      <div class="alert alert-info d-flex align-items-center justify-content-between w-50">
        No todos yet...

        <router-link to="/todos" class="btn btn-dark">Add todo</router-link>
      </div>
    </div>
  </TodosWrapper>
</template>
