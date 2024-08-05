import { auth, signOut, onAuthStateChanged,onSnapshot,  } from "./firebase.js";

import { myCollectionRef  } from "./product.js";

const allProductsPrint = document.querySelector(".allProducts");

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


/* Firebase all Products Print */

onSnapshot((myCollectionRef), (doc) => {
  // console.log(doc);
  doc.forEach((eachDoc) => {
    const product = eachDoc.data();
    console.log('product', product);
    
    
  allProductsPrint.innerHTML += `<div class="dis5">
      <img src="${product.Product_Photo}" alt="product_photo">
      <h3>${product.Product_Name}</h3>
      <span>${product.Product_Detail}</span>
      <p>Price ${product.Product_Price}</p>
      <button class="m-auto">order now</button>
  </div>`
    
    
  });
  
})