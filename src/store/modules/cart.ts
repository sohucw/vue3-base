import shop from '../../api/shop';

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    items: [],
    checkoutStatus: null
});

// getters
const getters = {
    cartProducts: (state: any, getters: any, rootState: any) => {
        return state.items.map(({ id, quantity }: { id: number; quantity: any }) => {
            const product = rootState.products.all.find((product: any) => product.id === id);
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity
            };
        });
    },

    cartTotalPrice: (state: any, getters: any) => {
        return getters.cartProducts.reduce((total: any, product: any) => {
            return total + product.price * product.quantity;
        }, 0);
    }
};

// actions
const actions = {
    checkout({ commit, state }: { commit: any; state: any }, products: any) {
        const savedCartItems = [...state.items];
        commit('setCheckoutStatus', null);
        // empty cart
        commit('setCartItems', { items: [] });
        shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed');
                // rollback to the cart saved before sending the request
                commit('setCartItems', { items: savedCartItems });
            }
        );
    },

    addProductToCart({ state, commit }: { commit: any; state: any }, product: any) {
        commit('setCheckoutStatus', null);
        if (product.inventory > 0) {
            const cartItem = state.items.find((item: any) => item.id === product.id);
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id });
            } else {
                commit('incrementItemQuantity', cartItem);
            }
            // remove 1 item from stock
            commit('products/decrementProductInventory', { id: product.id }, { root: true });
        }
    }
};

// mutations
const mutations = {
    pushProductToCart(state: any, { id }: { id: number }) {
        state.items.push({
            id,
            quantity: 1
        });
    },
    incrementItemQuantity(state: any, { id }: { id: number }) {
        const cartItem = state.items.find((item: any) => item.id === id);
        cartItem.quantity++;
    },

    setCartItems(state: any, { items }: { items: any }) {
        state.items = items;
    },

    setCheckoutStatus(state: any, status: any) {
        state.checkoutStatus = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
