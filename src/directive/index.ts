//directive/index.ts
import { App } from 'vue';
import track from './track';

export default {
    install(Vue: App) {
        Vue.directive('track', track);
    }
};
