import { getAll } from "../api/product";

const Product = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="grid grid-cols-3 gap-2 max-w-fit mx-auto">
            ${data.map((product) => `
            <a href="#/products/${product.id}" class="mt-4 max-w-fit border border-1 border-purple-500 p-4">
                <h3>${product.name}</h3>
                <img src="${product.img}"/>
                <p>${product.price}</p>
            </a>`).join("")}
        </div>
        `;
    },
};
export default Product;