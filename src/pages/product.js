import Header from "../components/header";
import Product from "../components/product";

const ProductPage = {
    async render() {
        return /* html */`
        ${Header.render()}
        <h2 class="text-xl">Product Page</h2>
        ${await Product.render()}
        `;
    },
};
export default ProductPage;