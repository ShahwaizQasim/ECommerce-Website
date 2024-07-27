
import {auth , signInWithEmailAndPassword } from "../scripts/firebase.js";

const form1 = document.getElementById("Login-Form");
const message = document.getElementById("message");

form1.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        const email = event.target.children[0].value;
        const password = event.target.children[1].value;

        const result = await signInWithEmailAndPassword(auth , email, password)
        message.innerText = 'Successfuly Login';
        console.log(result);

        event.target.reset();

    } catch (error) {
        message.innerText = error.message;
    }
})