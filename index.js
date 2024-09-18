// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getTime())
// console.log(date.getMinutes())
// let secnd= date.getSeconds()

// function time(){
    
// let format = secnd< 10 ?"0" + secnd : secnd;
// console.log(format);
    
// convert unit digit to double digits
function doubleDigit(unit){
    return unit < 10 ?"0" + unit : unit;
        
    }


    //function of getting current time and populate it to the dom 
function currentTime(){
    let date = new Date();
    let hour= date.getHours();
    hour = doubleDigit(hour);
    document.getElementById("hour").innerHTML = hour;
    
    let minute = date.getMinutes();
    minute = doubleDigit(minute);
    document.getElementById("minute").innerHTML = minute;

    let seconds = date.getSeconds();
    seconds = doubleDigit(seconds);
    document.getElementById("seconds").innerHTML = seconds;

    // console.log(hour+":"+minute+":"+seconds);
    }
    

    
setInterval(currentTime, 1000);

//function for blinking of dots
function toggledots(){

    let dot1 = document.getElementById("dot1");

    dot1.style.visibility = (dot1.style.visibility === "hidden") ? "visible" : "hidden";

    let dot2 = document.getElementById("dot2");

    dot2.style.visibility = (dot2.style.visibility === "hidden") ? "visible" : "hidden";



}


setInterval(toggledots,1000)

currentTime();

//getting current date

function currentDate(){
    let fulldate = new Date();

let date = fulldate.getDate();
date = doubleDigit(date);
document.getElementById("date").innerHTML = date;

let month =fulldate.getMonth()+1;
month = doubleDigit(month);
document.getElementById("month").innerHTML = month;

let year = fulldate.getFullYear();
year = doubleDigit(year);
document.getElementById("year").innerHTML = year;
console.log(date,month,year)

}
currentDate();
