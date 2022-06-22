import { createStore } from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
import douban from './modules/douban';
export default createStore({
    modules: {
        cart,
        products,
        douban
    },
    state: {},
    mutations: {},
    actions: {}
});
