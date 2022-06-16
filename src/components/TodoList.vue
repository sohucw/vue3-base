<template>
    <div class="todo-list">
        <Item
            v-for="todo in todos"
            :key="todo.id"
            :todo-item="todo"
            @change-state="todo.completed = $event.target.checked"
        >
        </Item>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import Item from './Item.vue';
import { Todo } from '../composables/iTodo';
// interface TTdos extends Array<Todo>{}
defineProps<{ todos: Array<Todo> }>();
</script>

<style>
.todo-list {
    display: grid;
    row-gap: 14px;
}
</style>
