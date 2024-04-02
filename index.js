let homeScore = document.getElementById("score1-el")
let guestScore = document.getElementById("score2-el")
let Score = document.getElementById("final-el")


let count1=0
let count2=0

function incrementHomeBy1(){
    count1 += 1
    homeScore.textContent = count1
    greater(count1,count2)
}

function incrementHomeBy2(){
    count1 += 2
    homeScore.textContent = count1
    greater(count1,count2)
}

function incrementHomeBy3(){
    count1 += 3
    homeScore.textContent = count1
    greater(count1,count2)
}

function incrementGuestBy1(){
    count2 += 1
    guestScore.textContent = count2
    greater(count1,count2)
}

function incrementGuestBy2(){
    count2 += 2
    guestScore.textContent = count2
    greater(count1,count2)
}

function incrementGuestBy3(){
    count2 += 3
    guestScore.textContent = count2
    greater(count1,count2)
}

function greater(x,y){
    if(x>y){
        Score.textContent = "Home team is winning!"
    }
    else if(x<y){
        Score.textContent = "Guest team is winning!"
    }
    else{
        Score.textContent = "Both teams are tied!"
    }
}