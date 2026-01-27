// ----event listener------ 

// // const Start=document.querySelector(".Start")
// // const Stop=document.querySelector(".Stop")

// // function TimeSt(){
// //     console.log("Time Started");
// // }

// // Start.addEventListener("click",TimeSt)
// // Stop.addEventListener("click",()=>{
// //     console.log("Timer Ended")
// //     Start.removeEventListener("click",TimeSt)
// // })
// const Start=document.querySelector(".Start")

// function key(event){
//     console.log(event.key)
//     console.log("Button is clicked")
// }
// Start.addEventListener("keyup",key)

// const form=document.querySelector('form')
// form.addEventListener('submit',(even)=>{
//     console.log("Form Submitted")
//     even.preventDefault();
// })

// -----------------event propogation------------ travelling of DOM. 3stages => capturing,target,bubbleing. Default Capturing and True is used for bubbleing

// const div2=document.querySelector(".div2")
// const btn=document.querySelector("button")
// const div=document.querySelector(".div")

// div.addEventListener('click',(event)=>{
//     console.log("div1 is clicked")
//     event.preventDeault();
// })
// div2.addEventListener('click',(event)=>{
//     console.log("div2 is clicked")
//     event.preventDefault();
// })
// btn.addEventListener('click',(event)=>{
//     console.log("btn is clicked")
//     event.preventDefault();
// })

// let firstName="harshit";

// console.log(firstName[firstName.length-3])
// console.log(firstName.length

// console.log("hello world")



// console.log(a)
// // console.log(b)

// var a=657
// let b=729

// console.log(a)
// console.log(b)

// function zint(){
//     let c=63
//     console.log(c)
//     console.log("inside function")

// }
// zint()

// debugger

// function first(){
//     second()
// }

// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// let total=100

// function cal(){
//     console.log(total)
//     let total=50
// }
// cal()

console.log("hello")
setTimeout(()=>{console.log("hello2sec")},2000)
console.log("hello3")