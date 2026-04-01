
// a="hello" //(string)
// b=12 //(Number or integer)
// c=true //(Bollean)
// d=null //(null means nothing)
// e=undefined //(undefined means it is not given)
// f=BigInt //(used for big number ex- used in reddit facebook where we get big number)
// g=Symbol //(used for uniqueness)


// primitive data types
//Number,Boolean,BigInt,String,Undefined,null,Symbol

let Id=Symbol('123') //it is used for symbol Id is also unique
let useEmail;// it is undefined
let number=23
let Strings="hello"
let Booolean=true
let bigNumber=BigInt(34423232239498493993883848348384838483848384883848838727)
let name=null

console.log(typeof Id)
console.log(typeof bigNumber)
console.log(typeof null)
// Non primitive data type (Reference Data Type)
// array,object,Functions
let a=[1,3,5,32,2,"hello"]
let objects={
    a:4,
    b:"hello",
    c:true
}

console.log(typeof a)
console.log(typeof objects)


const myfunction = function(){
    console.log("type of function")
}
console.log("typeof Function",typeof myfunction) // function datatype is function but it is said to be object function

// Non premitive data type is object but function gives function

// a="hello" //(string)
// b=12 //(Number or integer)
// c=true //(Bollean)
// d=null //(null means nothing)
// e=undefined //(undefined means it is not given)
// f=BigInt //(used for big number ex- used in reddit facebook where we get big number)
// g=Symbol //(used for uniqueness)
