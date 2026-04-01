const String1 = new String('Utkarsh')
console.log(String1.__proto__);

console.log(String1[0])
console.log(String1.length)
console.log(String1.substring(0,4))
console.log(String1.charAt(4))
console.log(String1.trim())
console.log(String1.slice(5,-1))// if we use start +ve and end -ve than the start position should be behind the stop position. 
console.log(String1.slice(-4,4))// Start<End(ignore the sign only numbers)

