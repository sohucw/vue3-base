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
import { reactive, onMounted } from 'vue';
import TodoAdd from '../components/TodoAdd.vue';
import TodoFilter from '../components/TodoFilter.vue';
import TodoList from '../components/TodoList.vue';
import { Todo } from '../composables/iTodo';
// import useTodos from '../composables/useTodos';
import useFilteredTodos from '../composables/useFilteredTodos';
const arras = [
    { id: 1, content: '任务1', completed: false },
    { id: 1, content: '任务2', completed: false },
    { id: 1, content: '任务3', completed: false }
];
const todos = reactive<Array<Todo>>(arras);
const addTodo = (todo: any) => todos.push(todo);
// const filter = ref<string>("all");
// const filteredTodos = computed(() => {
//   switch(filter.value) {
//     case "done":
//       return todos.filter((todo) => todo.completed);
//     case "todo":
//       return todos.filter((todo) => !todo.completed);
//     default:
//       return todos;
//   }
// })
// const { todos, addTodo } = useTodos();
const { filter, filteredTodos } = useFilteredTodos(todos);
onMounted(() => {
    // fetchTodos();
});
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
