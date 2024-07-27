import {auth, createUserWithEmailAndPassword} from "./firebase.js";

const form = document.getElementById("SignUp-Form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        const firstName = event.target.children[0].value;
        const LastName = event.target.children[1].value;
        const email = event.target.children[2].value;
        const password = event.target.children[3].value;

        const result = await createUserWithEmailAndPassword(auth , email, password)

        message.innerText = 'Sign Up Successfully';
        console.log(result);

        event.target.reset();
        
    } catch (error) {
        message.innerText = error.message;
        console.log("error", error.message);
    }
})
