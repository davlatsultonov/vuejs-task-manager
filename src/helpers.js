function setItemToLocalStorage (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getTodosFromLocalStorage() {
    const todos = getFromLocalStorage('todos');

    return todos ?? [];
}

export function setTodosFromLocalStorage(todos) {
    if (todos.length) {
        setItemToLocalStorage('todos', todos)
    }
}