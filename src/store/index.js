import { createStore } from 'vuex'
import {getTodosFromLocalStorage, setTodosFromLocalStorage} from "../helpers.js";

const todosStore = {
    state: () => ({
        todos: getTodosFromLocalStorage(),
    }),
    mutations: {
        add (state, todo) {
            state.todos = [...state.todos, todo];
            setTodosFromLocalStorage(state.todos);
        },
        remove (state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
            setTodosFromLocalStorage(state.todos);
        },
        edit (state, payload) {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo, title: payload.title
                    }
                }

                return todo;
            })
            setTodosFromLocalStorage(state.todos);
        },
        toggle (state, todoId) {
            state.todos = state.todos.map(todo => {
                if (todo.id === todoId) return {
                    ...todo, completed: !todo.completed
                }

                return todo;
            })
            setTodosFromLocalStorage(state.todos);
        }
    },
    getters: {
        count(state) {
          return state.todos.length
        },
        all(state, getters, rootState) {
            return state.todos.filter(todo => {
                switch (rootState.filterStore.filterState) {
                    case "active":
                        return !todo.completed;
                    case 'completed':
                        return todo.completed;
                    default:
                        return todo;
                }
            })
        },
        todo(state, todoId) {
            return state.todos.find(todo => todo.id === todoId)
        },
    }
}
const filterStore = {
    state: () => ({
        filterState: 'all'
    }),
    mutations: {
        setFilterState(state, payload) {
            state.filterState = payload;
        }
    },
    getters: {
        getFilterState(state) {
            return state.filterState;
        }
    }
}

// Create a new store instance.
const store = createStore({
    modules: {
        filterStore,
        todosStore
    },
})

export default store;