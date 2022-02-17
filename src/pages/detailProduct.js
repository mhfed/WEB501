import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";
import { get } from "../api/product";
import Header from "../components/header";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        ${Header.render()}
        <div class="max-w-xs m-auto grid grid-cols-2 gap-2 mt-4">
            <img src="${data.img}"/>
            <div>
                <h2 class="text-2xl mb-3">${data.name}</h2>
                <span class="text-red-700 block">${data.price}</span>
                <button id="btnAddToCart" class="mt-2 bg-indigo-300 px-4 py-3 rounded">Thêm vào giỏ</button>
            </div>
        </div>
        `;
    },
    afterRender(id) {
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);

            addToCart({ ...data, quantity: 1 });
        });
    },
};
export default DetailProductPage;