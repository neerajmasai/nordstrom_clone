/* toggle dropdown show effect */

function toggleSizeDropdown(){
    let sizeDropdown = document.getElementById("sizeDropdown");
    let colorDropdown = document.getElementById("colorDropdown");
    if(sizeDropdown.style.visibility == "visible"){
        sizeDropdown.style.visibility = "hidden";
    }
    else{
        colorDropdown.style.visibility = "hidden";
        sizeDropdown.style.visibility = "visible";
    }
}


function toggleColorDropdown(){
    let sizeDropdown = document.getElementById("sizeDropdown");
    let colorDropdown = document.getElementById("colorDropdown");
    if(colorDropdown.style.visibility == "visible"){
        colorDropdown.style.visibility = "hidden";
    }
    else{
        sizeDropdown.style.visibility = "hidden";
        colorDropdown.style.visibility = "visible";
    }    
}