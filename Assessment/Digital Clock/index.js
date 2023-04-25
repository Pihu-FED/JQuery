// function for day , month and year
function showCustomDayAndMonth(){
    let dateObj = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let day = dateObj.getDay();
    let month = dateObj.getMonth();
    let year = dateObj.getFullYear();
    let date = dateObj.getDate();

// for printing

let customDayMonth = days[day] + ", "+ date + "" + months[month] + "" + ", " + year;
document.getElementById("date").innerHTML = customDayMonth;

}

// function for time


function showTime(){
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();

// function for display AM 
let session = "AM";
if(h==0){
    h = 12;

}
if(h>12){
    h= h-12;
    session = "PM";
}
if(h<10){
    h = "0"+h;
}
if(m<10){
    m = "0"+ m;
}
if(s<10){
    s = "0" + s;
}

// for printing

document.getElementById("digital-clock").innerHTML = h + ":" + m + ":" + s + "   " + session;

setInterval(showTime,1000);
}
showTime();
showCustomDayAndMonth();