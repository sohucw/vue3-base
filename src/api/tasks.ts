import { tasks } from '../mock/index';
// import request  from "./request.js";

export const getTasks = () => {
    return new Promise((resolve) => {
        // request.get();
        setTimeout(() => {
            debugger;
            resolve(tasks);
        }, 500);
    }) as any;
};

export const task = (action: any, taskId: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(taskId);
        }, 100);
    });
};
