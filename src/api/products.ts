import { products } from '../mock/index.js';
// import request  from "./request.js";
export default {
    getProducts: () => {
        return new Promise((resolve) => {
            // request.get();
            setTimeout(() => {
                resolve(products);
            }, 500);
        });
    },
    products: (action: any, productId: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productId);
            }, 100);
        });
    }
};
