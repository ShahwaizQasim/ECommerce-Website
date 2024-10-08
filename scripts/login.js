import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form1 = document.getElementById("Login-Form");
const message = document.querySelector(".message");
const button = document.querySelector(".button");

form1.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[1].value;
    const password = event.target.children[2].value;

    button.disabled = true;

    const result = await signInWithEmailAndPassword(auth, email, password);

    window.location.href = "../pages/dashboard.html";

    event.target.reset();
  } catch (error) {
    message.innerText = error.message.slice(10);
    button.disabled = false;
  }
});
