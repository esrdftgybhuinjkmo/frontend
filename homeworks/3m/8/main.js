let userName = document.getElementById('userName')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
let text = document.getElementById('text')

let getPassword = /\w\d\w/gi
let getUserName = /[A-Za-z]/g
btn.addEventListener('click', () => {
    if(password.value.match(getPassword) && userName.value.match(getUserName)){
        text.textContent = 'Вы успешно зарегистрировались!';
        text.style.color = 'green';
    }
    else{
        text.textContent = 'Пароль должен содержать сочетание букв и цифр или введите имя только с латинскими буквами!'
        text.style.color = 'red'
    }

})
