let array = new Array(1,4,2,3,4,6)
// Array Methods
// array.push(19) // push any umber in end
// array.pop() // pop number from end no need to give number
// array.unshift(8) // insert number in start not optimize 
// array.shift() // remove value from start no need to give value
// console.log(array.includes(7))
// console.log(array.indexOf(6))
// console.log(array);

// let array2=array.join() // adds al the element of the array into the string

//splice,slice
let array3=array.slice(1,3) // we get the provided index last number is not taken but the original array remains same 
console.log(array);
console.log(array3);

let array4=array.splice(1,3) // we cutout the given index from original array and original array will be also changed
console.log(array);
console.log(array4);



