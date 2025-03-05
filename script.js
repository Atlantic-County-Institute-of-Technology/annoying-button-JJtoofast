let text = document.getElementById("text");
let button1= document.getElementById("button1")

let clicks=0;

button1.addEventListener("click", yell_at_user);

function yell_at_user() {  
    clicks++;     
    if( clicks == 1 ){ 
        text.innerHTML = "Hey! Stop that!";
    }                                                                                              
    else if( clicks == 5 ) {
        text.innerHTML = "I SAID STOP!";
    }     
    else if( clicks == 10 ) {
      button1.classList.add("angry");
        text.innerHTML = "Seriously Your such a child !";
    }       
    else if( clicks == 15 ) {
        button1.classList.remove("angry");
        text.innerHTML = " IM GOING TO FIND YOU !";
    }       
    else if( clicks == 20 ) {
        text.innerHTML = " IS THIS YOUR ADRESS AND IP ####### #### ######  !";
    }       

    else if( clicks == 25 ) {
        button1.classList.add("Really-Angry");
        text.innerHTML = " IM 100 YARDS OUT OF YOUR CURRENT LOCATION AND IM CLOSING IN FAST !";
    }       
    else if( clicks == 30 ) {
        button1.classList.remove("Really-Angry");
        text.innerHTML = " IM OUTSIDE YOUR DOOR OPEN UP NOW !";
    }       
    else if( clicks == 35 ) {
        text.innerHTML = " IM IN YOUR BEDROOM WAKEY WAKEY !";
    }
     else if( clicks == 40 ) {
            text.innerHTML = " THINK FAST CHUCKLEHEAD !";
              
     } 
     else if( clicks == 45){ 
        text.innerHTML = "NOW STOP IT YOUR BREAKING THE LAW #######!";
     }
     else if( clicks == 50){
        button1.classList.add("REALLY-REALLY-ANGRY")
        text.innerHTML = "OH YOUR SO FUNNY!"; 
     }
     else if( clicks == 55){
      
        text.innerHTML = "STOP TOUCHING ME ! ";
     }
        
    } 









































