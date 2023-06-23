
function getTodayDay(){
    const date=new Date();
    const allDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const todayDay=date.getDay();
    return allDays[todayDay];
}
function getTodayTime(){
    const date=new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let seconds=date.getSeconds();
    // let ampm=hours>=12 ? "PM":"AM"; 
    // if(hours>12) hours-=12;
    if(hours<12) hours='0'+hours;
    if(mins<10) mins='0'+(+mins);
    if(seconds<10) seconds='0'+(+seconds);
    let currentTime=hours+" "+" : "+mins+" : "+seconds;
    document.getElementById('showDate').innerHTML=currentTime;
}

setInterval(() => {
    getTodayTime()
}, 1000);
// console.log("Today is :",getTodayDay());
// console.log("Current Time is :",getTodayTime());

