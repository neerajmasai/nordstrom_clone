/* shopping cart functionality */
let metaCart = JSON.parse(localStorage.getItem("metaCart"));

//product images path
const PATH = "../products_page/";

function loadShoppingCart(){
    /* loads shopping cart items from local storage */

    //load cart count
    let cartCount = document.getElementById("cartCount");
    cartCount.innerHTML = metaCart.count;

    let cart = JSON.parse(localStorage.getItem("cart"));

    for(let i=0; i<cart.length; i++){
        appendCartItem(cart[i]);
    }
}

function appendCartItem(cartItem){
    /* appends cart items to front end */

    //parent div
    let parentDiv = document.getElementById("dynamicProductsDiv");
    
    //parent div 2
    let productDiv = document.createElement("div");
    productDiv.setAttribute("class", "shopBagProduct");

    //child elements

    //image div
    let imgDiv = document.createElement("div");
    imgDiv.style.width = "18%";
    imgDiv.style.height = "320px";

    //image
    let image = document.createElement("img");
    image.style.width = "80%";
    image.style.height = "180px";
    image.style.textAlign = "center";
    image.style.marginLeft = "10%";
    image.setAttribute("src", PATH+cartItem.prodObj.zoomImg);

    imgDiv.append(image);

    //description div
    let descDiv = document.createElement("div");
    descDiv.style.width = "40%";
    descDiv.style.height = "320px";

    //product name and brand
    let name = document.createElement("p");
    let brand = document.createElement("p");
    name.innerHTML = cartItem.prodObj.name;
    brand.innerHTML = cartItem.prodObj.brand;

    //delivery div - (parent:descDiv)
    let deliveryDiv = document.createElement("div");
    deliveryDiv.setAttribute("class", "deliveryDiv");
    deliveryDiv.style.marginTop = "40px";
    
    //deliveryDiv image
    let delvImage = document.createElement("img");
    delvImage.setAttribute("src","images/outline_local_shipping_black_24dp.png");

    //deliveryDiv child div 1
    let deliveryDivChild1 = document.createElement("div");
    let delvP = document.createElement("p");
    delvP.style.marginTop = "0px";
    delvP.style.fontSize = "15px";
    delvP.innerHTML = "Delivery";
    let delvP2 = document.createElement("p");
    delvP2.style.marginTop = "0px";
    delvP2.style.fontSize = "15px";
    delvP2.innerHTML = "You can expect delivery in 2-3 business days.";
    delvP2.style.color = "rgb(109, 109, 109)";

    deliveryDivChild1.append(delvP, delvP2);
    deliveryDiv.append(delvImage, deliveryDivChild1);

    //delivery div 2 - (parent:descDiv)
    let deliveryDiv2 = document.createElement("div");
    deliveryDiv2.setAttribute("class", "deliveryDiv");
    deliveryDiv2.style.marginTop = "40px";

    //deliveryDiv image
    let delvImage2 = document.createElement("img");
    delvImage2.setAttribute("src","images/outline_location_on_black_24dp.png");

    //deliveryDiv child div 1
    let deliveryDivChild2 = document.createElement("div");
    let delvP1 = document.createElement("p");
    delvP1.style.marginTop = "0px";
    delvP1.style.fontSize = "15px";
    delvP1.innerHTML = "Pickup";
    let delvP22 = document.createElement("p");
    delvP22.style.marginTop = "0px";
    delvP22.style.fontSize = "15px";
    delvP22.style.color = "rgb(109, 109, 109)";
    delvP22.innerHTML = "Available";

    deliveryDivChild2.append(delvP1, delvP22);
    deliveryDiv2.append(delvImage2, deliveryDivChild2);

    //remove button div
    let rmvBtnDiv = document.createElement("div");
    rmvBtnDiv.setAttribute("class","removeButton");
    let rmvBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    rmvBtn.innerHTML = "Remove";
    saveBtn.innerHTML = "Save for later";

    rmvBtnDiv.append(rmvBtn, saveBtn);

    //finally add to desc div
    descDiv.append(name, brand, deliveryDiv, deliveryDiv2, rmvBtnDiv);

    //qty div
    let qtyDiv = document.createElement("div");
    let qty = document.createElement("p");
    qty.innerHTML = "<b>Qty: </b>"+cartItem.qty;
    qtyDiv.append(qty);

    //sub total div
    let subDiv = document.createElement("div");
    subDiv.setAttribute("class","bagProdCost");
    let subTotal = document.createElement("p");
    subTotal.innerHTML = "&#8377;"+" "+cartItem.subTotal;
    subDiv.append(subTotal);

    //lastly add everything to product div
    productDiv.append(imgDiv, descDiv, qtyDiv, subDiv);

    //append product div to parent div
    parentDiv.append(productDiv);

}

loadShoppingCart();