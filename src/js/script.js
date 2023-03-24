

'use strict';

let info = document.querySelectorAll('.info-header-tab'),
infoHeader = document.querySelector('.info-header'),
tab = document.querySelectorAll('.info-tabcontent');

function hide(a) {
    for(let i=a; i < tab.length; i++) {
tab[i].classList.remove('show');
tab[i].classList.add('hide');
    }
}
hide(1);

function show(b) {
    if(tab[b].classList.contains('hide')) {
        tab[b].classList.remove('hide');
        tab[b].classList.add('show'); 
    }
}

infoHeader.addEventListener('click', function(event) {
if(event.target && event.target.classList.contains('info-header-tab'))
{
    for(let i = 0; i < info.length; i++) {
        if(event.target == info[i]) {
            hide(0);
            show(i);
            break;
        }
    }
}
});

let deadline = '2023-03-20',
    timer = document.getElementById('timer'),
    hour = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds');

function remaining() {
let t = Date.parse(deadline) - Date.parse(new Date()),
sec = Math.floor((t / 1000) % 60),
min = Math.floor((t / 1000 / 60) % 60),
ho = Math.floor((t / 1000 / 60 / 60));
let obj = {
    'total' : t,
    'sec' : sec,
    'min' : min,
    'ho' : ho
}
return obj;
};

setInterval(setclock,1000);
function(num){
    if(num <= 9) {
        return '0' + num;
    } else return num;
}
function setclock() {
   let obj = remaining();
    hour.textContent = obj.ho;
    minutes.textContent = obj.min;
    seconds.textContent = obj.sec;
    return;
    
    }

