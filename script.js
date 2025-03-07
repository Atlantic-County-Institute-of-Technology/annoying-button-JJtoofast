let text = document.getElementById("text");
let button1= document.getElementById("button1")
let button2= document.getElementById("button2")

let laugh = new Audio('assets/Sonic_LAUGH.mp3'); 
let yay = new Audio('assets/Yayyyy.mp3'); 

let right_clicks=0;
let left_clicks=0;


button1.addEventListener("click", yell_at_user);

function yell_at_user() {
   
    right_clicks++;     
    if( right_clicks == 1 ){ 
        text.innerHTML = "Hey! Stop that!";
    }                                                                                              
    else if( right_clicks == 5 ) {
        text.innerHTML = "I SAID STOP!";
    }     
    else if( right_clicks == 10 ) {
      button1.classList.add("angry");
        text.innerHTML = "Seriously Your such a child !";
    }       
    else if( right_clicks == 15 ) {
        button1.classList.remove("angry");
        text.innerHTML = " IM GOING TO FIND YOU !";
    }       
    else if( right_clicks == 20 ) {
        text.innerHTML = " IS THIS YOUR ADRESS AND IP ####### #### ######  !";
    }       

    else if( right_clicks == 25 ) {
        button1.classList.add("Really-Angry");
        text.innerHTML = " IM 100 YARDS OUT OF YOUR CURRENT LOCATION AND IM CLOSING IN FAST !";
    }       
    else if( right_clicks == 30 ) {
        button1.classList.remove("Really-Angry");
        text.innerHTML = " IM OUTSIDE YOUR DOOR OPEN UP NOW !";
    }       
    else if( right_clicks == 35 ) {
        text.innerHTML = " IM IN YOUR BEDROOM WAKEY WAKEY !";
    }
     else if( right_clicks == 40 ) {
            text.innerHTML = " THINK FAST CHUCKLEHEAD !";
              
     } 
     else if( right_clicks == 45){ 
        text.innerHTML = "NOW STOP IT YOUR BREAKING THE LAW #######!";
     }
     else if( right_clicks == 50){
        laugh.play("Sonic_LAUGH.mp3");
        button1.classList.add("REALLY-REALLY-ANGRY")
        text.innerHTML = "OH YOUR SO FUNNY!"; 
     }
     else if( right_clicks == 55){
      
        text.innerHTML = "STOP TOUCHING ME ! ";
     }
     else if( right_clicks == 60){
        button1.classList.remove("REALLY-REALLY-ANGRY")
        text.innerHTML = "PRESS THE OTHER BUTTON";
     }
        
    } 
    button2.addEventListener("click", yell_at_user2);
    
    function yell_at_user2(){ 
        left_clicks++; 
        if( left_clicks == 1 ){ 
            text.innerHTML = "Hey Keep clicking !";
        }                                                                                              
        else if( left_clicks == 5 ) {
            text.innerHTML = "Only A couple of more times !";
        }     
        else if( left_clicks == 10 ) {
            yay.play(Yayyyy.mp3)
          button2.classList.add("happy");
            text.innerHTML = "YOU WON THE GAME !";
    }
    }
       
    








































