// Знакомство с try 

// try {
//     // log;
//     console.log('try exelent'); 
//     console.log(5 + 6);
//     try {
//         log; 
//     } catch (error) {
//         console.log('Error 404');
//     }
// } catch (error) {
//     console.log(error);   
// }

// Обращение к html
let userName = document.getElementById('userName');
let city = document.getElementById('city');
let work = document.getElementById('work');
let div = document.getElementById('div');
let btn = document.getElementById('btn');

let searchName = ''

// Оброботчики
userName.onchange = (e) => {
    searchName = e.target.value;    
}

city.onchange = (e) => {
    cityai = e.target.value;    
}

btn.onclick = () => {
    fetchJson(userName.value)
}

let user = 2;

// Запрос на бэкенд с помощью fetch

const fetchJson = (searchName) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => {
        // data.map(user => console.log(`Город: ${user.address.city}, Компания: ${user.company.name}`))
        data.forEach(user => {
            if(searchName == user.id){
                div.append(`id: ${user.id}, title: ${user.title},body:${user.body}`)
                // console.log(user.name);
            }
            else{
                return                
            }
        });
        data.forEach(user => {
            if(cityai == user.title){
                div.append(`id: ${user.id}, title: ${user.title},body:${user.body}`)
                // console.log(user.name);
            }
            else{
                return                
            }
        });

        // div.append(data.filter((user) => {
        //     return user.name == searchName;
        // }));
        
        
        // console.log(`Город: ${data.address.city}, Компания: ${data.company.name}`);
        // console.log(data);
    })
    .catch((error) => console.log(error))
}