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
  window.onload = function logged() {
    var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if(isLoggedIn){
        //show name and logout option
        var sign = document.getElementById("signInOption");
        var currentEmail = JSON.parse(localStorage.getItem("currentEmail"));
        var allEmails = JSON.parse(localStorage.getItem("allEmails"));
        var details = allEmails.filter(function (el) {
            return el.curEmail == currentEmail;
        })[0];
        sign.innerHTML = details.fName;
        var logoutDiv = document.getElementById("signIn")
        var logout = document.createElement("option");
        logout.value = "Sign Out";
        logout.innerHTML = "Sign Out";
        logout.addEventListener("click", () => {
            isLoggedIn = false;
            localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
            window.location.reload();
        });
        logoutDiv.append(logout);
    }
    else{
        //show Sign In
        var sign = document.getElementById("signInOption");
        sign.innerHTML = "Sign In";
        sign.value = "Sign In";
    }
}
function signIn(){
    /* redirect to sign in page */
    window.location.href = "../login page/login.html";
}