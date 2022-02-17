const Header = {
    render() {
        return /* html */`
        <div class="flex justify-end bg-black text-white px-32">
            <a href="#/signup" class="px-4 py-2 text-sm">SignUp</a>
            <a href="#/signin" class="px-4 py-2 text-sm">SignIn</a>
        </div>
        <div class="flex justify-center bg-indigo-900 text-white">
            <a href="#/" class="p-4 text-xl">Home</a>
            <a href="#/products" class="p-4 text-xl">Products</a>
            <a href="#/cart" class="p-4 text-xl">Cart</a>
        </div>`;
    },
};
export default Header;