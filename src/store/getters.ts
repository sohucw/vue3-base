export const cartProducts = (state: any) => {
    return state.cart.added.map(({ id, quantity }: { id: number; quantity: any }) => {
        const product = state.products.all.find((p: any) => p.id === id);
        return {
            title: product.title,
            price: product.price,
            quantity
        };
    });
};
