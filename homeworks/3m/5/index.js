let a = document.getElementById('input1');
let c = document.getElementById('input2');
let b = document.getElementById('oper');
let p = document.getElementById('p');


let btn = document.getElementById('btn').onclick = ()=>{
    if (b.value == '*'){
        p.textContent = a.value * c.value;

        
    }else if (b.value == '+') {
      p.textContent = +a.value + +c.value;
       
    }else if (b.value == '-') {
        p.textContent = a.value - c.value;

        
    }else  if(b.value == '/') {
        p.textContent = a.value / c.value;


    }else  if(b.value == '**') {
        p.textContent = a.value * a.value ;

    }else  if(b.value == '***') {
        p.textContent = a.value * a.value *  a.value ;

    }else  if(b.value == '√') {
        p.textContent =    (Math.pow (a.value , 1/c.value)).toFixed(2) ;

    }
};








