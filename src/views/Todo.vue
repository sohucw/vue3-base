<template>
    <div class="main">
        <div class="container">
            <h1>欢迎使用Todo List</h1>
            <TodoAdd :tid="todos.length" @add-todo="addTodo" />
            <TodoFilter :selected="filter" @change-filter="filter = $event" />
            <TodoList :todos="filteredTodos" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import * as taskApi from '../api/tasks';
import TodoAdd from '../components/TodoAdd.vue';
import TodoFilter from '../components/TodoFilter.vue';
import TodoList from '../components/TodoList.vue';
import { Todo } from '../composables/iTodo';
// import useTodos from '../composables/useTodos';
// import useFilteredTodos from '../composables/useFilteredTodos';
let todos = ref<Array<Todo>>([]);
const filter = ref<string>('all');
// 也可以使用定义对象的方式
// const state = reactive({
//     todos: [] as Todo[]
// })
const addTodo = (todo: any) => todos.value.push(todo);
onMounted(async () => {
    todos.value = await taskApi.getTasks();
});
const filteredTodos = computed(() => {
    switch (filter.value) {
        case 'done':
            return todos.value.filter((todo) => todo.completed);
        case 'todo':
            return todos.value.filter((todo) => !todo.completed);
        default:
            return todos.value;
    }
});
// const { todos, addTodo } = useTodos();
// const { filter, filteredTodos } = useFilteredTodos(todos);
</script>
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica, 'PingFang SC', 'Microsoft Yahei', sans-serif;
}
/* 整个页面 */
.main {
    width: 100vw;
    min-height: 100vh;
    display: grid;
    align-items: center;
    justify-items: center;
}
.container {
    width: 60%;
    max-width: 400px;
    box-shadow: 0 0 24px rgb(6 107 251 / 15%);
    border-radius: 24px;
    padding: 48px 28px;
    background-color: rgb(229, 230, 235);
}
/* 标题 */
h1 {
    margin: 24px 0;
    font-size: 28px;
    color: #384280;
}
</style>
