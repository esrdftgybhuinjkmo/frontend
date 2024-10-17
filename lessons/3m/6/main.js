
const  days = document.getElementById('days');
const  hours = document.getElementById('hours');
const  minutes = document.getElementById('minutes');
const  second = document.getElementById('seconds');


const formatNum = num => num < 10 && num > -10 ? `0${num}` : num;




let date = new Date();
let history = new Date(0);
let ibrahim = new Date(2025, 1, 15);
let difference = ibrahim.getTime() - date.getTime();


 setInterval(()=>{
    let date = new Date();
    let ibrahim = new Date(2025, 1, 15);
    let difference = ibrahim.getTime() - date.getTime();
    days.textContent = formatNum(Math.floor(difference/1000/60/60/24));
    hours.textContent = formatNum(Math.floor((difference /1000/ 60/ 60) %24));
    minutes.textContent = formatNum(Math.floor((difference/ 1000/ 60) %60));
    second.textContent = formatNum(Math.floor((difference/ 1000) %60));

 },1000)



// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getDate());



