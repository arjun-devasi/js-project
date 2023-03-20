"use strict";
 let randomNumber=Math.trunc(Math.random()*100+1);
 let chances=5;
 document.querySelector(".match").addEventListener("click",function(){
  const userNumber= Number(document.querySelector(".guess").value);

  if(userNumber){
    if(chances>1){
      if(userNumber>randomNumber){
        document.querySelector(".message").textContent=" 🫳Guess lower Number";
      }
      else if(userNumber<randomNumber){
       document.querySelector(".message").textContent=" 🫴Guess higher Number";
      } 
      else{
      document.querySelector(".message").textContent="👍😀You are Winner👍";
      document.querySelector(".number").textContent=randomNumber;
      document.querySelector(".number").style.backgroundColor="green";
      document.querySelector(".match").setAttribute("disabled", "");
      }
    }else{
      document.querySelector(".message").textContent="😒😒You are Looser";
      document.querySelector(".number").textContent=randomNumber;
      document.querySelector(".number").style.backgroundColor="red";
      document.querySelector(".match").setAttribute("disabled", "");
    } 
    chances--;
    
    if(chances>=0)
      document.querySelector(".score").textContent=chances;
    
  }
  else{
     document.querySelector(".message").textContent="😬 Enter Number before click" 
  }
 });
