// // trim
// let firstName = "    Utkarsh    "; // once we had created a variable with let then we can't use let for making variable of same name we use it without let 
// console.log(firstName);
// console.log(firstName.length);
// firstName = firstName.trim();
// console.log(firstName);
// console.log(firstName.length);
// // toUpperCase and toLowerCase

// firstName=firstName.toLowerCase()
// console.log(firstName) //java script mai lines matter karti hai // 
// firstName=firstName.toUpperCase()
// console.log(firstName)

// // slice
// firstName=firstName.slice(0,6)
// console.log(firstName)

// //type of data conversion

// // typeof
// let age="112";
// console.log(typeof age)

// //string concatenation

// let string1 = "10"
// let string2 = "12"
// let newstring = +string1+ +string2
// console.log(newstring)

// // template string
// let num= 18;
// let name="Utkarsh"
// let aboutMe=`My name is ${name} and my age is ${num}`
// console.log(aboutMe)

//arrays- ordered collection of items

// fruits=["apple","banana","mango"]
// console.log(fruits)

// //it will add the item from last place of the array
// fruits.push("kiwi")
// console.log(fruits)

// //it will delete the item from last place of the array
// fruits.pop()
// console.log(fruits)

// //it add item in array from start
// fruits.unshift("killo")
// console.log(fruits)

// //it remove item from array from starting 
// fruits.shift()
// console.log(fruits)

// //push and pop is faster than unshift and shift 

// // primitve vs refrence data types
// // primitve data type

// let num1=16
// let num2=num1
// console.log("num1",num1)
// num1++;
// console.log("after increment num1")
// console.log("value of num1",num1) // output 17
// console.log("value of num2",num2) // output 16

// //reference type
// let array1=["item1","item2"]
// let array2=array1
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push("item3");
// console.log("array1",array1); // output [item1,item2,item3]
// console.log("array2",array2); // output [item1,item2,item3]
