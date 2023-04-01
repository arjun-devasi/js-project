let priceCost= document.querySelector("#price");
let discount=document.querySelector("#dicount");
let saving=document.querySelector("#savedAmt");
let finalCost=document.querySelector("#finalPrice");


priceCost.addEventListener("input",calculate)
discount.addEventListener("input",calculate)

function calculate(){
    let originalcost =priceCost.value;
    let discountValue=discount.value;
   let savingval=originalcost*discountValue/100;
   let finalVal=originalcost-savingval;
   saving.value=savingval;
   finalCost.value=finalVal;
}