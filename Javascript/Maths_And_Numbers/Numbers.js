const score = new Number(400);
console.log(score.toString().length) // length of string can be counted only numbers do not have length

const Decimal= new Number(292.972)
console.log(Decimal.toFixed(1)); // used to get values after decimal 
console.log(Decimal.toPrecision(3));// used to get get rounded off numbers 

const millions=new Number(100000000);
console.log(millions.toLocaleString("en-US"));
console.log(millions.toLocaleString("en-IN"));

console.log(Math.PI)