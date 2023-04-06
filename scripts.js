//referencing buttons into variables
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#timer");

//create global variable for the timer
let count; //variable will hold setInterval function
let i = 0; //variable starts at 0

//create function for start variable
//add eventlistener
start.addEventListener("click", () => {
  count = setInterval(() => {
    i++; //adding 1 to i variable that starts at 0
    timer.innerHTML = i; //writing JS into HTML to show in browser
    console.log("I started counting"); //showing in console to check if it is working
  }, 1000);
});

//create function for stop variable
//add eventlistener

//create function for reset variable
//add eventlistener
