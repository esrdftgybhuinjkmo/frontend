// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - li.

// const li = ()=>{
//     return document.querySelector('li').textContent
// }
// console.log(li());





// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - li.

const task2 = ()=>{
   let nodelist=  document.querySelectorAll('li');
   let array = Array.from(nodelist);
   return array.map((item)=>{
   return  item.textContent
   })
}
// console.log(task2());




// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом list-item
const task3 = ()=>{
    let nodelist=  document.querySelectorAll('.list-item');
    let array = Array.from(nodelist);
    return array.map((item)=>{
    return  item.textContent
    })
 }
//  console.log(task3());




// Task 4
// Напишите функцию, которая вернет массив со значениями аттрибута class внутри тэгов элементов с классом list-item





// Task 5
// Напишите функцию, которая вернет массив со значениями аттрибута data-test-id внутри тэгов элементов с классом list-item.
// Этот аттрибут написан для тестирования программы специальным роботом и по нему этот робот находит нужные элементы. Цель его - дать возможность роботу зацепиться за нужные элементы
const task5 = ()=>{
    let nodelist=  document.querySelectorAll('.list-item');
    let array = Array.from(nodelist);
    return array.map((item)=>{
    return  item.getAttribute('data-test-id')
    })
 }
//  console.log(task5());





// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом list-item должен быть текст цвета.
// И у этого же элемента должен быть класс с текстом цвета.
// Например
// <li class="list-item green" data-test-id="1">green</li>  
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректными цветами.
// <li class="list-item orange" data-test-id="3">yellow</li>  
// Ваша задача вернуть массив аттрибутов data-test-id у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.


const task6 = ()=>{
    let nodelist=  document.querySelectorAll('.list-item');
    let array = Array.from(nodelist).filter(item => !item.className.includes(item.textContent));
    return array.map((item)=>{
    return  item.getAttribute('data-test-id')
    })
 }

//  console.log(task6());
 

// Task 7
// Обновите текст всех элементов с классом list-item, по следующему шаблону
// <li class="list-item green" data-test-id="1">green</li>  
// Стало
// <li class="list-item green" data-test-id="1">1 green</li>  
// То есть ${data-test-id} ${text}
// Используйте forEach
// yourElementsArray.forEach((element) => {  
  
// })  



const task7 = () =>{
    let nodelist = document.querySelectorAll('.list-item');
    nodelist.forEach((item)=>{
        item.textContent=`${data-test-id} ${text}`
    })
}




// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом list-item у которых класс не соответствует содержимому. Ваша задача их удалить. Для обхода элементов для удаления используйте forEach
// и удаления
// Чтобы удалить элемент - вы должны взять родителя этого элемента и удалить его потомка.
// yourElementsArray.forEach((element) => {  
  




// })  
// Task 9
// На сайте есть поле для ввода с id = "secret-login". 
// Ваша задача - изменить его содержимое на You were hacked

const task9 = ()=>{
    document.getElementById('secret-login').value='You were hacked';

}

// task9()


// Task 10
// Один из способов хакерских атак - это XSS - Cross Site Scripting. Идея заключается в том, что хакер вставляет вредоносный код в незащищенное поле и он будет выполняться в браузерах жертвы. Сейчас вы такой хакер, который нашел уязвимость сайта.
// У вас есть кнопка с айди button-send и поле с id = "secret-login". Ваша задача:
// •	добавить на кнопку обработчик события click, который(все что происходит дальше - происходит внутри обработчика)
// •	вызвать функцию-коллбек переданную в аргументе
// •	дальше меняет текст внутри селектора .login-screen на You was hacked
// По этическим соображениям, я не должен такие примеры давать. Но с другой стороны, если вы поймете, как это работает вы будете понимать потенциальные проблемы безопасности
const task10 = ()=>{
    let btn =document.getElementById('btn');
btn.onclick=()=>{
    input.value = input.value('You was hacked');
}
}
task10()






// Task 11
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello
// Task 12
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div
// у ul элемента должен быть айди #list
// Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10

