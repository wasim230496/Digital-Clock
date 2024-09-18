// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getTime())
// console.log(date.getMinutes())
    let date = new Date();
let secnd= date.getSeconds()

// function time(){
    
// let format = secnd< 10 ?"0" + secnd : secnd;
// console.log(format);
    
function currentTime(){
    let date = new Date();
    function doubleDigit(unit){
        return unit < 10 ?"0" + unit : unit;
            
        }
    let hour= date.getHours();
    hour = doubleDigit(hour);
    document.getElementById("hour").innerHTML = hour+" ";
    
    let minute = date.getMinutes();
    minute = doubleDigit(minute);
    document.getElementById("minute").innerHTML = minute;

    let seconds = date.getSeconds();
    seconds = doubleDigit(seconds);
    document.getElementById("seconds").innerHTML = seconds;

    // console.log(hour+":"+minute+":"+seconds);
    }
    

    
setInterval(currentTime, 1000);

function toggledots(){

    let dot1 = document.getElementById("dot1");

    dot1.style.visibility = (dot1.style.visibility === "hidden") ? "visible" : "hidden";

    let dot2 = document.getElementById("dot2");

    dot2.style.visibility = (dot2.style.visibility === "hidden") ? "visible" : "hidden";



}


setInterval(toggledots,1000)

currentTime();


// }