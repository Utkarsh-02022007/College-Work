const array1=[1,2,3,4];
const array2=[5,6,7,8,"abc"];

const array3=[...array1,...array2,..."hello"]; //..."hello" it will spread the hello(string) one word at each index strings are iterable and arrays are iterable.
console.log(array3)

// console.log("hello")

