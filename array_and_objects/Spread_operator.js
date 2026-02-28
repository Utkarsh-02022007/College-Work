// Spread Operator with arrays


// const array1=[1,2,3,4];
// const array2=[5,6,7,8,"abc"];

// const array3=[...array1,...array2,..."hello"]; //..."hello" it will spread the hello(string) one word at each index strings are iterable and arrays are iterable.
// console.log(array3)

// Spread Operators in Objects

// const obj1={
//     name:"utkarsh",
//     age:18,
//     class:"1st year"
// }

// const obj2={
//     name:"Rahul",
//     age:18,
//     class:"1st year"
// }
// const newobject={
//     ...obj1,...obj2,Key1:"Value"
// }


const newobject={
    ..."abc"            // spread opertor with string
}
const listobject={
    ...["list1","list2"] //spread operator with list 
}
console.log(newobject)
console.log(listobject)