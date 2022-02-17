let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((product) => product.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if (next) {
        next();
    }
};
export const increaseItemInCart = (id) => {
    cart.find((product) => product.id === +id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
};
export const decreaseItemInCart = (id) => {
    const currentProduct = cart.find((product) => product.id === +id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sp ko");
        if (confirm) {
            cart = cart.filter((item) => item.id !== currentProduct.id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
export const removeItemInCart = (id) => {
    const confirm = window.confirm("Bạn có muốn xóa sp ko");
    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};