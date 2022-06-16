import { createApp } from 'vue';
import App from './App.vue';
import directive from './utils/directive';
import Exposure from './utils/exposure';
import './registerServiceWorker';
import router from './router';
import store from './store';
// exp就是那个全局唯一的实例
const exposure = new Exposure();
const app = createApp(App);
directive(app);
// vue封装一个指令，每个使用了该指令的商品都会自动add自身进观察者中
app.directive('exp-dot', {
    mounted: (el: any, binding: any, vnode: any) => {
        exposure.add({ el: el, val: binding.value });
    }
});
app.use(store).use(router).mount('#app');
