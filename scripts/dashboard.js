import { auth, signOut, onAuthStateChanged } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  // basically is function ka kaam ye hai ky User login hai ya nhi
  if (user) {
    // User is signed in
    // const uid = user.id;
    console.log(user);
    // ...
  } else {
    // User is signed out
    window.location.href = "../pages/login.html";
    // ...
  }
});

const logOut_btn = document.getElementById("LogOut");
logOut_btn.addEventListener("click", async () => {
  try {
    await signOut(auth); // user agr login hai tw ye function logout krwa dega
    console.log("SignOut Successfully");
  } catch (error) {
    console.log("error", error);
  }
});
