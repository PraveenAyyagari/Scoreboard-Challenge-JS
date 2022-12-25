
let homeCount =0;
let guestCount = 0;
let totalHomeScore = document.getElementById("home-score-el");
let totalGuestScore = document.getElementById("guest-score-el");
let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

function homeOne(){
    homeCount +=1;
    totalHomeScore.textContent = homeCount;
}


function homeTwo(){
    homeCount +=2;
    totalHomeScore.textContent = homeCount;
    
}

function homeThree(){
    homeCount +=3;
    totalHomeScore.textContent = homeCount;
    
     
}

function guestOne(){
    guestCount +=1;
    totalGuestScore.textContent = guestCount;
 
 }
 
 
 function guestTwo(){
    guestCount +=2;
     totalGuestScore.textContent = guestCount;
     
 }
 
 function guestThree(){
    guestCount +=3;
     totalGuestScore.textContent = guestCount;
       
 }
 