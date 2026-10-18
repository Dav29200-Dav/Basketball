
let homescore=document.getElementById("scorehome")
let guestscore=document.getElementById("scoreguest")

let counthome=0
let countguest=0

function onepoint(){
    counthome+=1
    homescore.textContent=counthome
    
}
function twopoint(){
    counthome+=2
    homescore.textContent=counthome
}
function threepoint(){
    counthome+=3
     homescore.textContent=counthome
}

function onepoint2(){
    countguest+=1
    guestscore.textContent=countguest
}

function twopoint2(){
    countguest+=2
    guestscore.textContent=countguest
}
function threepoint2(){
    countguest+=3
    guestscore.textContent=countguest
}