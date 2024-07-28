import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("SignUp-Form");
const message = document.querySelector(".message");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const fullName = event.target.children[0].value;
    const mobile = event.target.children[1].value;
    const email = event.target.children[2].value;
    const password = event.target.children[3].value;

    const result = await createUserWithEmailAndPassword(auth, email, password);

    alert(`Congratulations, ${fullName} Your account has been created`);
    window.location.href = "../pages/login.html";

    console.log(result);

    event.target.reset();
  } catch (error) {
    message.innerText = error.message.slice(10);
  }
});
