function writeToStorage() {
    var email = document.getElementById("input1").value
    var arr = JSON.parse(localStorage.getItem("allEmails"));
    var flag = false;
    if(arr == null){
        arr = [];
        localStorage.setItem("currentEmail", JSON.stringify(email));
        

        return window.location.href = "login1.html";
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].email == email) {
            flag = true;
            return window.location.href = "login3.html";
        }
    }

    // if (flag == true) {
    //     localStorage.setItem("currentEmail", JSON.stringify(email));
    //     return window.location.href = "login3.html";
    // }
}
/* end universal */



/* index page */
// function goToSignUp(){
//     window.location.href = "login1.html";
// }
// function goToLogin(){
//     window.location.href = "login3.html";
// }
/* end index page */

function loggedIn(){
    window.location.href = "login2.html";
}

function home() {
    window.location.href = "";
}