import { onMounted, reactive } from 'vue';
//import { Todo } from './iTodo';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const arras = [
    { id: 1, content: '任务1', completed: false },
    { id: 1, content: '任务2', completed: false },
    { id: 1, content: '任务3', completed: false }
];
export default function useTodo() {
    // const todo = reactive <Array<Todo>>(arras);
    const todo = reactive(arras);
    const addTodo = (todo: any) => todo.push(todo);
    // const fetchTodos = async () => {
    //     //const response = await fetch('http://127.0.0.1:8000/todos');
    //     // const rawTodos = await response.json();
    //     // for (let i = 0; i < rawTodos.length; i++) {
    //     //     const rawtodo = rawTodos[i];
    //     //     todos.push({
    //     //         id: rawtodo.id,
    //     //         content: rawtodo.content,
    //     //         completed: rawtodo.completed
    //     //     });
    //     // }
    //     // todos = rawTodos.map((rawtodo: any) => ({
    //     //     id: rawtodo.id,
    //     //     content: rawtodo.title,
    //     //     completed: rawtodo.completed
    //     // }))

    // };

    onMounted(() => {
        // fetchTodos();
    });

    return {
        todos: todo,
        addTodo
    };
}
