const date=new Date();
function getTodayDay(){
    const allDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const todayDay=date.getDay();
    return allDays[todayDay];
}
function getTodayTime(){
    let hours=date.getHours();
    let mins=date.getMinutes();
    let seconds=date.getSeconds();
    let ampm=hours>=12 ? "PM":"AM";
    if(hours>12) hours-=12;
    if(mins<10) mins='0'+(+mins);
    if(seconds<10) seconds='0'+(+seconds);
    return hours+" "+ampm+" : "+mins+" : "+seconds;
}
console.log("Today is :",getTodayDay());
console.log("Current Time is :",getTodayTime());