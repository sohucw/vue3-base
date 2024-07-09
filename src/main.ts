import { createApp } from 'vue';
import App from './App.vue';
import directive from './directive';
import './registerServiceWorker';
import router from './router';
import store from './store';
const app = createApp(App);
//挂载埋点指令
app.use(directive);
app.config.errorHandler = function (err, vm, info) {
    console.log('errorHandle:', err, vm, info);
};
app.use(store).use(router).mount('#app');

window.addEventListener('error', (args) => {
    console.log('error', args);
});
