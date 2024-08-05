import {db, collection, addDoc , storage, ref,uploadBytes,getDownloadURL  } from "./firebase.js";

const productsForm = document.getElementById("products_form")
const productPhoto = document.getElementById("productPhoto"); 
const button = document.querySelector(".btn");
const loading = document.getElementById("load");

const myCollectionRef = collection(db, "products");

productsForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    try{
    const myFile = productPhoto.files[0];

    const storageRef = ref(storage, myFile.name);
   
    button.disabled = true;
    loading.innerText = 'Loading...';

    const imageSnapshot = await uploadBytes(storageRef, myFile);
    const urlImage =  await getDownloadURL(storageRef);
    
    
    const productName = event.target.children[0].value;
    const productPrice = event.target.children[1].value;
    const productDetails = event.target.children[2].value;
    
    
    let myProduct = {
        Product_Name: productName,
        Product_Price: productPrice,
        Product_Detail: productDetails,
        Product_Photo: urlImage,
    }

        const docRef = await addDoc(myCollectionRef, myProduct)
        console.log('docRef', docRef.id);

        window.location.href = '../pages/dashboard.html';


    } catch (error) {
        swal({
            icon: "error",
            title: "Error",
            text: error.message || "Unknown Error",
          });
    }

})

export{
    myCollectionRef,
}
