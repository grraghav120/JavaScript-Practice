let currentTiming;
let currentDay;
let array=localStorage.getItem('array')?(JSON.parse(localStorage.getItem('array'))):[];
document.getElementById('showTimeStamps').innerHTML=array;
document.getElementById('allTime').innerHTML=(array.length===0)?'':'Your TimeStamps';

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
    if(hours<12) hours='0'+hours;
    if(mins<10) mins='0'+(+mins);
    if(seconds<10) seconds='0'+(+seconds);
    let currentTime=hours+" "+" : "+mins+" : "+seconds;
    currentTiming=currentTime;
    document.getElementById('showDate').innerHTML=currentTime;
    document.getElementById('day').innerHTML=getTodayDay();
}

function onTimeStamp(){
    array.push(' '+(array.length+1)+' => '+currentTiming);
    document.getElementById('allTime').innerHTML=(array.length===0)?'':'Your TimeStamps';
    localStorage.setItem('array',JSON.stringify(array));
    document.getElementById('showTimeStamps').innerHTML=array;   
}

function onResetTimeStamp(){
    array=[];
    localStorage.clear('array');
    document.getElementById('showTimeStamps').innerHTML='';
    document.getElementById('allTime').innerHTML='';
}

setInterval(() => {
    getTodayTime();
}, 1000);
