import { auth, onAuthStateChanged } from "./firebase.js";


onAuthStateChanged(auth, (user) => {
  // basically is function ka kaam ye hai ky User login hai ya nhi
  console.log("shahwiaz");
  if (user) {
    // agr user login hai tw direct dashboard pr chla jaye user
    // User is signed in
    window.location = "../pages/dashboard.html";
  } else {
    // agr user login nhi hai tw login pr chala jaye user
    // User is lop out
    window.location = "../pages/login.html";
  }
});
