import Navigo from "navigo";

import CartPage from "./pages/cart";
import DetailProductPage from "./pages/detailProduct";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);

    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(DetailProductPage, data.id),
    "/cart": () => print(CartPage),
    "/signin": () => print(SignIn),
    "/signup": () => print(SignUp),

}).resolve();

router.notFound(() => {
    console.log("Not found page");
});