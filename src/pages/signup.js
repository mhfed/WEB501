import { $ } from "../../utils";
import { signup } from "../api/user";

const SignUp = {
    render() {
        return `
        <form id="formSignup">
            <input type="email" id="email" placeholder="Your Email" class="border border-black" />
            <input type="password" id="password" placeholder="Your password" class="border border-black" />
            <button>Signup</button>
        </form>
    `;
    },
    afterRender() {
        $("#formSignup").addEventListener("submit", async (e) => {
            e.preventDefault();
            const { data } = await signup({
                email: $("#email").value,
                password: $("#password").value,
            });
            if (data) {
                document.location.href = "#/signin";
            }
        });
    },
};
export default SignUp;