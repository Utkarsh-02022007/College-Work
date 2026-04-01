let Number1 = 54
let Bollean_Number = String(Number1)
console.log(Bollean_Number)
console.log(typeof(Bollean_Number))


let Number2 = "54abc"
let Boolean_Number2 = Number(Number2) // here we are converting string to number but it is has been converted to number but showing NaN(not a number) 
console.log(Boolean_Number2)
console.log(typeof Boolean_Number2 )

let Name="Utkarsh"
let booleanName = Boolean(Name)
console.log(booleanName)
// if we have something in string than the boolean will be converted to the True

let Name2=""
let booleanName2 = Boolean(Name2)
console.log(booleanName2)
// if we have don't have something in string than the boolean will be converted to False 

// -----Operations------
console.log(1+2+"3")
console.log("1"+2+3)
console.log(1+"2"+3)
// if string is in last then the operation will be performed and 
// if the string is in starting or inbetween then 
// the operation will be not be performed and it will be done as string 123 not 32

let gamecounter=100
let gamecounter2=++gamecounter; // it will increase in the intial value first then print the perfomed value added value
// let gamecounter2=gamecounter++;  // it will print first then it will increase then the gamecounter 2 will be 100 but after ++ then gamecounter will be 101

console.log("gamecounter2",gamecounter2)
console.log("gamecounter",gamecounter)






