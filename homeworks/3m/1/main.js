let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btn = document.getElementById('btn');

btn.onclick = ()=>{
    if (input1.value.includes("." && "https://" || "http://")){
        input1.style.color = 'green';

    }else{
        input1.style.color ='red';

    }
    if (input2.value.includes( "." && "@")){
        input2.style.color = 'green';

    }else{
        input2.style.color ='red';

    }

}
    
    




