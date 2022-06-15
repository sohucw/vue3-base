import { computed, ref } from 'vue';
import { Todo } from './iTodo';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useFilteredTodo(todo: Array<Todo>) {
    const filter = ref('all');

    const filteredTodos = computed(() => {
        switch (filter.value) {
            case 'done':
                return todo.filter((todo) => todo.completed);
            case 'todo':
                return todo.filter((todo) => !todo.completed);
            default:
                return todo;
        }
    });

    return {
        filter,
        filteredTodos
    };
}
