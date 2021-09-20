const hour = document.querySelector('.hour');
const minVar = document.querySelector('.minute');
const secVar = document.querySelector('.second');



setInterval (()=>{
    d=new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rot = 30*hr+min/2;
    min_rot = 6*min;
    sec_rot = 6*sec;

    hour.style.transform = `rotate(${hr_rot}deg)`;
    minVar.style.transform = `rotate(${min_rot}deg)`;
    secVar.style.transform = `rotate(${sec_rot}deg)`;
})
