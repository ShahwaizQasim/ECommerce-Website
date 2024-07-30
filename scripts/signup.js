import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("SignUp-Form");
const message = document.querySelector(".message");
const button = document.querySelector(".button");
console.log(button);

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    button.disabled = true;

    const fullName = event.target.children[0].value;
    const mobile = event.target.children[1].value;
    const email = event.target.children[2].value;
    const password = event.target.children[3].value;

    // button.disabled = true;

    const result = await createUserWithEmailAndPassword(auth, email, password);

    // alert(`Congratulations, ${fullName} Your account has been created`);

    swal({
      icon: "success",
      title: "Congratulations!",
      text: `${fullName} Your account has been created`,
    });

    window.location.href = "../pages/login.html";
    console.log(result);
    event.target.reset();
  } catch (error) {
    message.innerText = error.message.slice(10);
    button.disabled = false;
  }
});
