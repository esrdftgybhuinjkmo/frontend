

const getData1 = async ()=>{

        await fetch('https://jsonplaceholder.typicode.com/posts/1/')
    .then(response => response.json())
    .then(date => {
    root.innerHTML += <h1>${date.id}</h1>
    })
    }
    const getData2 = async ()=>{
    
        await fetch('https://jsonplaceholder.typicode.com/posts/2/')
    .then(response => response.json())
    .then(date => {
    root.innerHTML += <h1>${date.id}</h1>
    })
    }
    
    const getData3 = async ()=>{
    
        await fetch('https://jsonplaceholder.typicode.com/posts/3/')
    .then(response => response.json())
    .then(date => {
    root.innerHTML += <h1>${date.id}</h1>
    })
    }




    async function getAllData(){
        await getData1()
        await getData1()
        await getData1()

}
        
    getAllData()



//асинхранный деп промисти айтабыз себеби алар катары мене чыкпайт
// const root = document.getElementById('root');
// const btn = document.getElementById('send-bnt');




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data =>{
//     data.forEach(item => {
//         root.innerHTML +=`<h1>${item.title}</h1>`
//     });
// })





// const post={
//     userid:1,
//     title:'hello',
//     body:'hello geek'
// };
// btn.onclick = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json;charset=utf-8'

//         },
//         body:JSON.stringify(post)

//     })
//     .then((response) =>{
//         console.log(response);
//         alert('оа')
        
//     })
// }