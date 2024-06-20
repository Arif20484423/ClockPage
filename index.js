var head = document.querySelector('.head');
head.addEventListener('mouseover', function () {
    head.style.color = 'grey';
})
head.addEventListener('mouseout', function () {
    head.style.color = 'white';
})



function getdaystr(x) {
    switch (x) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            return "wrong";
            break;
    }
}
var time = document.getElementById('time');

var text;
function showtime() {
    var d = new Date();
    text=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+' on '+getdaystr(d.getDay())+','+d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    time.textContent = text;
}
setInterval(showtime, 100);

//Stopwatch functions

var start=document.getElementById('start');
var stop=document.getElementById('stop');
var minv=0
var secv=0
var momv=0
var mint,sint,mmint;
var min=document.getElementById('min')
var sec=document.getElementById('sec')
var mom=document.getElementById('mom')
let flag=true;
start.addEventListener('click',()=>{
    if(flag){
        mint=setInterval(stmin,60000);
        sint=setInterval(stsec,1000)
        mmint=setInterval(stmom,10);
        flag=false;
    }
    
})
function stmin(){
    minv+=1;
    min.textContent=minv;
}
function stsec(){

    secv+=1
    if(secv===60){
        secv=0
    }
    sec.textContent=secv
}
function stmom(){
    momv+=1;
    if(momv===100){
        momv=0
    }
    mom.textContent=momv
}
var startclicked=false;
stop.addEventListener('click',()=>{
    
    clearInterval(mint);
    clearInterval(sint);
    clearInterval(mmint);
    flag=true;
})




//Appearance

document.querySelector('#start').addEventListener('mouseover',()=>{
    document.querySelector('#start').style.backgroundColor='white';
})
document.querySelector('#stop').addEventListener('mouseover',()=>{
    document.querySelector('#stop').style.backgroundColor='white';
})
document.querySelector('#start').addEventListener('mouseout',()=>{
    document.querySelector('#start').style.backgroundColor='grey';
})
document.querySelector('#stop').addEventListener('mouseout',()=>{
    document.querySelector('#stop').style.backgroundColor='grey';
})
