import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
});

router.resolve();

router.notFound(() => {
    console.log("Not found page");
});