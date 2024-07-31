import { db, collection, addDoc } from "./firebase.js";

const productsForm = document.getElementById("products_form")

const myCollectionRef = collection(db, "products");

productsForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const productName = event.target.children[0].value;
    const productPrice = event.target.children[1].value;
    const productDetails = event.target.children[2].value;
    // const productImage = event.target.children[3].value;
    
    
    const myProduct = {
        Product_Name: productName,
        Product_Price: productPrice,
        Product_Detail: productDetails,
    }

    try {
        const docRef = await addDoc(myCollectionRef, myProduct)
        console.log('docRef', docRef.id);
    } catch (error) {
        console.log(error);
    }

})

// try {
    
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }