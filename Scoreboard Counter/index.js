//Call home score from HTML
let home_Score = document.getElementById("homeScore")
//Call guest score from HTML
let guest_Score = document.getElementById("guestScore")

//Add +1 when +1 homeBtn clicked 
let homeIncrease = 0;

function add1() {
   homeIncrease += 1
    home_Score.textContent = homeIncrease 
}
//Add +2 when +2 homeBtn clicked
function add2() {
   homeIncrease += 2
   home_Score.textContent = homeIncrease 
} 
//Add +3 when +3 homeBtn clicked
 function add3() {
    homeIncrease += 3
    home_Score.textContent = homeIncrease
 }

//Add +1 when +1 guestBtn clicked
 let guestIncrease = 0
 function guest1() {
    guestIncrease += 1
    guest_Score.textContent = guestIncrease
 }
//Add +2 when +2 guestBtn clicked 
function guest2() {
    guestIncrease += 2
    guest_Score.textContent = guestIncrease
}
//Add +3 when +3 guestBtn clicked 
function guest3() {
    guestIncrease += 3
    guest_Score.textContent = guestIncrease
}
