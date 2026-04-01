let date= new Date()
console.log(date.toJSON())
console.log(date.toISOString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toDateString())
let date2=new Date(2026,0,20) // in single value of month the month will start from 0 because it was an array
console.log(date2.toLocaleDateString())

let date3=new Date("") // YY/MM/DD
console.log(date3.toLocaleString())