import { ref } from 'vue';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAddTodo(tid: number, emit: any) {
    const todoContent = ref('');
    const emitAddTodo = () => {
        const todo = {
            id: tid,
            content: todoContent.value,
            completed: false
        };
        // 发出add-todo事件给父元素
        emit('add-todo', todo);
        todoContent.value = '';
    };
    return {
        todoContent,
        emitAddTodo
    };
}
