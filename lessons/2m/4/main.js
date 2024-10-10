// let h1 = document.getElementById('first_text');
// let tag = document.querySelector('button');

// console.log(h1);
// console.log(tag);


// h1.setAttribute("class","text")



// let roi = document.getElementById('loi');
// roi.textContent = 'ikujyhtg';


let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let a = document.createElement('p')
    a.textContent = input.value;
    document.body.append(a);
    input.value = 'нариши текст';
})


input.addEventListener('change',(event)=>{
    console.log(event.target.value);
    
})