let celInput=document.querySelector(".celcius > input");
let fehInput=document.querySelector(".fehrenheit >input");
let kelvinInput=document.querySelector(".kelvin > input");
let btn=document.querySelector(".button button");
function roundNumber(number){
   return Math.round(number*100)/100;
}
celInput.addEventListener("input",function(){
  let ctemp=parseFloat(celInput.value);
  let ftemp=(ctemp*(9/5))+32
  let ktemp=ctemp+273.15
  
  fehInput.value=roundNumber(ftemp);
  kelvinInput.value=roundNumber(ktemp);
});
  fehInput.addEventListener("input",function(){
    let ftemp=parseFloat(fehInput.value);
    let ctemp=(ftemp-32)*(5/9);
    let ktemp=(ftemp-32)*(5/9)+273.15;
    
    celInput.value=roundNumber(ctemp);
    kelvinInput.value=roundNumber(ktemp);
});
    kelvinInput.addEventListener("input",function(){
        let ktemp=parseFloat(kelvinInput.value);
        let ftemp=(ktemp-273.15)*(9/5)+32;
        let ctemp=ktemp-273.15;
        
        fehInput.value=roundNumber(ftemp);
        celInput.value=roundNumber(ctemp);
});
btn.addEventListener("click",function(){
    celInput.value="";
    fehInput.value="";
    kelvinInput.value="";

})