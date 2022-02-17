import { $ } from "../../utils";
import { signin } from "../api/user";

const SignIn = {
    render() {
        return /* html */`
        <form id="formSignIn">
                <input type="email" id="email" class="border border-black" placeholder="Your email"/>
                <input type="password" id="password" class="border border-black" placeholder="Your password"/>
                <button>Đăng nhập</button>
        </form>
        `;
    },
    afterRender() {
        $("#formSignIn").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: $("#email").value,
                    password: $("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                document.location.href = "/#/";
            } catch (error) {
                console.log(error);
            }
        });
    },
};
export default SignIn;