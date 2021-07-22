let india = document.querySelector(".india");
let shipCross = document.querySelector(".shipCross");
india.addEventListener("click", shipDetails);
shipCross.addEventListener("click", shipDivClose);
let homeShipDiv = document.querySelector(".homeShipDiv");

function shipDetails() {
    homeShipDiv.style.display = "inherit";
}

function shipDivClose() {
    homeShipDiv.style.display = "none";
}

function slideShow() {
    let slidebox1 = document.getElementById("carosol1");
    let slideContainer1 = document.createElement("div");
    slidebox1.append(slideContainer1);
    slideContainer1.setAttribute('id', "slides");

    let arr = ["https://n.nordstrommedia.com/id/e4969afd-c301-41a7-b55e-c115759a3983.png?h=200&w=1609",
               "https://n.nordstrommedia.com/id/28996ae5-713b-412d-9ee0-74ba0e9b9dc3.png?h=200&w=1609"
    ];
    let carosolImg = document.createElement("img");
    carosolImg.setAttribute("class", "carosolImg1")
    let i = 0;
    carosolImg.src = arr[0];
    slideContainer1.append(carosolImg);

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }

        carosolImg.src = arr[i];
        i++;
    }, 1500);
}

slideShow();

function slideShow2() {
    let slidebox2 = document.getElementById("carosol2");
    let slideContainer2 = document.createElement("div");
    slidebox2.append(slideContainer2);
    slideContainer2.setAttribute("id", "slides2");

    let arr = [
        "https://n.nordstrommedia.com/id/560a4d67-0866-4982-8f29-d8e6924374d6.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/597390bd-9e50-4bff-be66-fc4329cbe39b.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/0cad90fd-2a34-401f-a841-35b8d874af94.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/b1147cfa-ea31-4ca7-ba97-0eddbf5e7192.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/5a37cf9c-99ac-4a5d-ae8d-851995cea70c.jpeg?h=600&w=1608",
        "https://n.nordstrommedia.com/id/b334b085-dfa9-4e8c-808d-6e118a7b1a5c.jpeg?h=600&w=1608"
    ]
    let carosolImg2 = document.createElement("img");
    carosolImg2.setAttribute("class", "carosolImg2");
    let i = 0;
    carosolImg2.src = arr[0];
    slideContainer2.append(carosolImg2);

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }

        carosolImg2.src = arr[i];
        i++;
    }, 1500);
}

slideShow2();

let catDiv1 = document.querySelector("#catDiv1");
catDiv1.addEventListener("click", shopByMen);

function shopByMen() {
    window.location.href = "../products_page/products.html";
}


let annSale = document.querySelector("#annSale");
annSale.addEventListener("mouseover", dropDown);
annSale.addEventListener("mouseleave", dropDown2);

let women = document.getElementById("women");
women.addEventListener("mouseover", dropDownWomen);
women.addEventListener("mouseleave", dropDownWomen2);

let men = document.getElementById("men");
men.addEventListener("mouseover", dropDownMen);
men.addEventListener("mouseleave", dropDownMen2);

let kids = document.getElementById("kids");
kids.addEventListener("mouseover", dropDownKids);
kids.addEventListener("mouseleave", dropDownKids2);

let activeWear = document.getElementById("activeWear");
activeWear.addEventListener("mouseover", dropDownWear);
activeWear.addEventListener("mouseleave", dropDownWear2);

let home = document.getElementById("home");
home.addEventListener("mouseover", dropDownHome);
home.addEventListener("mouseleave", dropDownHome2);

let gifts = document.getElementById("gifts");
gifts.addEventListener("mouseover", dropDownGifts);
gifts.addEventListener("mouseleave", dropDownGifts2);

let beauty = document.getElementById("beauty");
beauty.addEventListener("mouseover", dropDownBeauty);
beauty.addEventListener("mouseleave", dropDownBeauty2);

let sale = document.getElementById("sale");
sale.addEventListener("mouseover", dropDownSale);
sale.addEventListener("mouseleave", dropDownSale2);

let designer = document.getElementById("designer");
designer.addEventListener("mouseover", dropDownDesigner);
designer.addEventListener("mouseleave", dropDownDesigner2);

let brand = document.getElementById("brands");
brand.addEventListener("mouseover", dropDownBrand);
brand.addEventListener("mouseleave", dropDownBrand2);

function dropDown() {
    let dropMainContainer = document.querySelector(".dropMainContainer");
    dropMainContainer.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDown2() {
    let dropMainContainer = document.querySelector(".dropMainContainer");
    dropMainContainer.style.display = "none";
}

function dropDownWomen() {
    let dropMainContainer2 = document.querySelector(".dropMainContainer2");
    dropMainContainer2.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownWomen2() {
    let dropMainContainer2 = document.querySelector(".dropMainContainer2");
    dropMainContainer2.style.display = "none";
}

function dropDownMen() {
    let dropMainContainer3 = document.querySelector(".dropMainContainer3");
    dropMainContainer3.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownMen2() {
    let dropMainContainer3 = document.querySelector(".dropMainContainer3");
    dropMainContainer3.style.display = "none";
}

function dropDownKids() {
    let dropMainContainer4 = document.querySelector(".dropMainContainer4");
    dropMainContainer4.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownKids2() {
    let dropMainContainer4 = document.querySelector(".dropMainContainer4");
    dropMainContainer4.style.display = "none";
}

function dropDownWear() {
    let dropMainContainer5 = document.querySelector(".dropMainContainer5");
    dropMainContainer5.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownWear2() {
    let dropMainContainer5 = document.querySelector(".dropMainContainer5");
    dropMainContainer5.style.display = "none";
}

function dropDownHome() {
    let dropMainContainer6 = document.querySelector(".dropMainContainer6");
    dropMainContainer6.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownHome2() {
    let dropMainContainer6 = document.querySelector(".dropMainContainer6");
    dropMainContainer6.style.display = "none";
}

function dropDownGifts() {
    let dropMainContainer7 = document.querySelector(".dropMainContainer7");
    dropMainContainer7.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownGifts2() {
    let dropMainContainer7 = document.querySelector(".dropMainContainer7");
    dropMainContainer7.style.display = "none";
}

function dropDownBeauty() {
    let dropMainContainer8 = document.querySelector(".dropMainContainer8");
    dropMainContainer8.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownBeauty2() {
    let dropMainContainer8 = document.querySelector(".dropMainContainer8");
    dropMainContainer8.style.display = "none";
}

function dropDownSale() {
    let dropMainContainer9 = document.querySelector(".dropMainContainer9");
    dropMainContainer9.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownSale2() {
    let dropMainContainer9 = document.querySelector(".dropMainContainer9");
    dropMainContainer9.style.display = "none";
}

function dropDownBrand() {
    let dropMainContainer10 = document.querySelector(".dropMainContainer10");
    dropMainContainer10.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownBrand2() {
    let dropMainContainer10 = document.querySelector(".dropMainContainer10");
    dropMainContainer10.style.display = "none";
}

function dropDownDesigner() {
    let dropMainContainer11 = document.querySelector(".dropMainContainer11");
    dropMainContainer11.style.display = "inherit";
    // alert("Im dropdown");
}
function dropDownDesigner2() {
    let dropMainContainer11 = document.querySelector(".dropMainContainer11");
    dropMainContainer11.style.display = "none";
}

//product dynamic functionality - neeraj
function productPage(id){
    /* stores id in local storage and updates selected value and redirects to product page*/

    //update value
    let selectedProduct = id;

    //store in local storage
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

    //redirect to product page
    window.location.href = "../products_page/products.html";
}