let i = 0;


const recurs = (num)=>{
    if (num === 1)return 1
    return num * recurs(num -1)
    
    
    
}

// console.log(recurs(6));

const curry = (a,b,c ) =>{
    return a+b+c;

}
console.log(curry(5,6,7));

