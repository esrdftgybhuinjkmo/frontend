let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
   ]
 users.map((e)=>{
    e.admin = false;
    if (e.name == 'Маша'){
        e.admin = true;

    }
 })
console.log(users);





































// users.map((abc)=>{
//     abc.admin = false;
//     if (abc.name == "Маша"){
//         abc.admin = true;
//     }
// })

// console.log(users);
