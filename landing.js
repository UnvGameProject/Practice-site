/* Author: Brandon Minter
    Date: 12/11/2022
    Assignent: E-Commerce Website Project 
*/

showClock();
setInterval(showClock, 1000);


/**
 * This function controls the timer on the landing screen graphic-device
 */
function showClock() {
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();
    // document.getElementById('date').innerHTML = '<p>'+ localDate +'</p>';
    document.getElementById('time').innerHTML = '<p>' + localTime + '</p>';
}