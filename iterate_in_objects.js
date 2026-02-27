const obj1={
    name:"Utkarsh",
    age:18,
    email:"utkarshyadav669@gmail.com"
}
// for (let key in obj1){
//     // console.log(`${k} : ${obj1[k]}`)
//                  //or
//     console.log(key,obj1[key]);
    
// }
for(let key of Object.keys(obj1)){
    console.log(obj1[key])
}