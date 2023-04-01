let inputs=document.querySelector(".input-display");
let keywords=document.querySelectorAll("button");
for( let i=0; i< keywords.length;i++){
   keywords[i].addEventListener("click",function(){
        if(this.innerHTML=="="){
            try{ inputs.value =eval(inputs.value);
            }
            catch(error){
                inputs.value="undifined";
            }
        }
        else if(this.innerHTML=="C"){
            inputs.value="";
        }
        else if(this.innerHTML=="DEL"){
            inputs.value=inputs.value.slice(0, -1);
        }
        else if(this.innerHTML=="×")
            inputs.value= inputs.value+"*";
        else{
             inputs.value +=this.innerText;
       }
    });
}
document.addEventListener("keyup",function(e) {
    if(e.key=="=" ||e.key=="Enter"){
        try{ inputs.value =eval(inputs.value);
        }
        catch(error){
            inputs.value="undifined";
        }
    }
    else if(e.key=="c" ||e.key=="C"){
        inputs.value="";
    }
    else if(e.key=="Backspace"){
        inputs.value=inputs.value.slice(0, -1);
    }
    else if(e.key=="Shift+*")
        inputs.value= inputs.value+"*";
    else{
         inputs.value +=e.key;
   }
});
