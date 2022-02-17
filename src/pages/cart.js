import { $ } from "../../utils";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../../utils/cart";
import Header from "../components/header";

const CartPage = {
    render() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        return /* html */ `
        ${Header.render()}
        <table>
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${cart.map((item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td class="px-4">${item.price}
                            
                        </td>
                        <td>
                            <button  data-id="${item.id}" class="btn increase border border-black p-2">+</button>
                            <button  data-id="${item.id}" class="btn decrease border border-black p-2">-</button>
                        </td>
                        <td>
                            <button data-id="${item.id}" class="btn remove border bg-red-500 px-4 py-3 text-white">Remove</button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
            <tfoot>
                <tr><td colspan="2" class="text-right">Tổng là: <span id="total">null</span></td></tr>
            </tfoot>
        </table>
        `;
    },
    afterRender() {
        const btns = $(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("increase")) {
                    increaseItemInCart(id);
                } else if (btn.classList.contains("decrease")) {
                    decreaseItemInCart(id);
                } else {
                    removeItemInCart(id);
                }
            });
        });
    },
};
export default CartPage;