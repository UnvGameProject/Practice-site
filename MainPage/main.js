/* Author: Brandon Minter
    Date: 12/11/2022
    Assignent: E-Commerce Website Project 
*/

setInterval(timer, 1000);


function timer() {
  const thisDay = new Date();
  let localDate = thisDay.toLocaleDateString();
  let localTime = thisDay.toLocaleTimeString();

  let countdownEl = document.getElementsByClassName('countdown').textContent;
  const xmas = nextxmas(thisDay);
  xmas.setHours(8);
  
  let days = Math.round((xmas - thisDay) / 1000/60/60/24);
  let hrs =  24 - thisDay.getHours();
  let mins =  60 - thisDay.getMinutes();
  let secs =   60 - thisDay.getSeconds();
  
  document.getElementById('days').textContent = `${days}`;
  document.getElementById('hours').textContent = `${hrs}`;
  document.getElementById('mins').textContent = `${mins}`;
  document.getElementById('secs').textContent = `${secs}`;
  // console.log(countdownEl);
}

function nextxmas(currentDate) {
   var cYear = currentDate.getFullYear();
   var cDate = new Date("December 25, 2022");
   cDate.setFullYear(cYear);
   if ((cDate - currentDate) < 0) cDate.setFullYear(cYear + 1);
   return cDate;
}