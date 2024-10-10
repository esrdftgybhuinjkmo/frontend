 let date = new Date();

// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());


// const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// console.log(week[date.getDay() - 1]);


// const month = ['Феврал', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь'];

// console.log(month[date.getMonth()-1]);


// console.log(

//     date.getMonth()<10
//     ? `0${date.getMonth()}`
//     :date.getMonth()
// );

let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let div = document.getElementById('div')

btn.onclick = () =>{
    let h = document.createElement('p')
    h.textContent = `${inp.value} ${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} - ${date.getHours()} :${date.getMinutes()} : ${date.getSeconds()}`;
    div.appendChild(h);
}






