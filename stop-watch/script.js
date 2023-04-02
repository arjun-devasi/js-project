 "use strict"
const timerWat=document.querySelector(".timer");

let sec=0,min=0,hr=0,setId;
 const start=()=>{
       setId=setInterval(()=>{
       if(sec<59) sec++;
       else if(min>=59){
           hr++;
           min=0;
          }
       else{
           sec=0;
           min++;
       }  
        const second=sec.toString().padStart(2,"0");
        const minutes=min.toString().padStart(2,"0");
        const hours=hr.toString().padStart(2,"0");

         timerWat.innerText =`${hours}:${minutes}:${second}`;
      },1000);

 };
 
 const stop= ()=>{
     clearInterval(setId);
 };
 const reset=()=>{
    timerWat.innerText="00:00:00";
    sec=0;
    min=0;
    hr=0;
};