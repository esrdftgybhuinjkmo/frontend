


document.getElementById('btn').onclick =()=>{
    let card = document.getElementById('card');
    if (card.className.includes('show')){
        card.className = 'card'
        document.getElementById('btn').textContent = 'show'
    }else{
        card.className = 'card show'
        document.getElementById('btn').textContent = 'hide'
    }
}


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data =>{
    data.forEach((item)=>{
        document.getElementById('root').innerHTML+=`
        <h1>${item.title}</h1>
        <p>${item.body}</p>
        <br>
        <hr>
        <br>`
    })
})