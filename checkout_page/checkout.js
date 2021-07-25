/* dynamic nav cart count */
function loadNavCount(){
    /* loads navbar cart count */
  
    const navCart = document.getElementById("navCartCount");
  
    //get meta cart
    let cart = JSON.parse(localStorage.getItem("metaCart"));
  
    if(cart == null){
      navCart.innerHTML = 0;
    }
    
    navCart.innerHTML = cart.count;
  
  }
  function shoppingCart(){
    /* redirect to shopping cart */
    window.location.href = "../shopping_cart/shopping_cart.html";
  }
  loadNavCount();
  /* end */