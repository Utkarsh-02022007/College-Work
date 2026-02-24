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
// --------------- timeout--------------
// console.log("hello")
// setTimeout(()=>{console.log("hello2sec")},2000)
// console.log("hello3")

// setInterval(() => {
//     console.log("after 3sec")
// }, 1000);
// var hello=1
// const timerId=setInterval(()=>{
//     hello+=1
//     console.log(hello)
// },1000)

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },1000)


// let count=1

// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//     console.log(count)
//     count+=1
// },1000)

// ---------btn and name box------------

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{
//     const li=document.createElement('li')
//     li.innerText=name.value
//     list.appendChild(li)
//     name.value=""
// })

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{
//     if (name.value=="")return
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")


//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })


//     list.appendChild(li)
//     li.appendChild(dlt)

    
//     name.value=""
// // })
// function greet (xyz){
//     setTimeout(()=>{
//         console.log("hello students")
//         xyz(45)
//     },2000)
// }

// function print(num){
//     console.log("Total student are ",num)

// }
// greet(print)
// function finishHomework(callback){
//     console.log("Starting homework...");
//     setTimeout(()=>{
//         console.log("Homework Done!");
//         callback();
//     },2000);
// }

// function eatDinner(callback){
//     console.log("Starting Dinner");
//     setTimeout(()=>{
//         console.log("Dinner Done!")
//         callback();

//     },1500);

// }
// function goToPlayground(){
//     console.log("Going To The PlayGround!");
// }
// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     })
// })
// function dohomework(){
//     const p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true
//             if(done){
//                 console.log("did Homework")
//                 resolve("Homework Done")
//             }else{
//                 reject("Homework Not Done")
//             }

//         }, 2000);
//     })
//     return p

// }
// function eatDinner(){
//     const p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true
//             if(done){
//                 console.log("ate Dinner")
//                 resolve("Dinner Done")
//             }else{
//                 reject("Dinner Not Done")
//             }
//         }, 2000);
//     })
//     return p
// }
// function goToPlayground(){
//     const p= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true
//             if(done){
//                 console.log("went to Playground")
//                 resolve(" Playground time")
//             }else{
//                 reject("not allowed")
//             }
//         }, 2000)
//     })
//     return  p
// }
// dohomework()
// .then((message)=>{
//     console.log(message)
//     return eatDinner()
// }).then((message)=>{
//     console.log(message)
//     return goToPlayground()
// }).then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{                                                                     
//     console.log("All tasks are done")
// })

// Async and Await 

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("food ordered")
//             res()
//         },2000)
//     })
// }


// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("food Prepared")
//             res()
//         },2000)
//     })
// }


// function foodDeliver(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("food Deliver")
//             res()
//         },2000)
//     })
// }

// async function order() {
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await foodDeliver()
    
// }
// order()

// orderFood().then((data)=>{
//     return prepareFood()
// }).then((data)=>{
//     return foodDeliver()
// }).then((data)=>{

// }).catch((err)=>{
//     console.log("Something went wrong")
// })

// console.log("first Line")
// try{
//     let sample=234
//     console.log(sample)
//     console.log("line after sample")
// }catch(e){
//     console.log(e)
// }
// console.log("Last Line")
// try{
// let age=16
// if(age<18){
//     throw new Error("You are not eligible for vote")
//     // console.log("line after throw")
//     //
//     //
//     //
    
// }
// } catch(e){
//     console.warn(e)
// }
//   console.log('last line')
// async function getbata(){
//  const response=await fetch("https://dummyjson.com/products")
//  const data=await response.json()
// // console.log(data.products[6].title)
//  data.products.forEach((product)=>{
//     console.log(product.title)
//  })
// }
// getbata() 

// sending data to api or backend
// async function sendData() {
//    const response=await fetch('https://dummyjson.com/products/add',{
//       method:'POST',
//       headers:{
//          "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//          title:"New Product",
//          description:"This is a new product",
//          price:100,
//          discountPercentage:10,
//          rating:4.5,
//          stock:50,
//          brand:"ABC",
//          category:"Electronics"
//       })
//    })
//    const data=await response.json()
//    console.log(data)
   
// }
// sendData()


// local storage
//Store data
// localStorage.setItem("username","Prateek");
// localStorage.setItem('age',45)

// //Get data
// console.log(localStorage.getItem("username"))
// console.log(localStorage.getItem("age"))

// Remove data from local storage
// localStorage.removeItem('username')
// console.log(localStorage.getItem('username'))

// localStorage.removeItem('age')
// console.log(localStorage.getItem('age'))

// localStorage.setItem('name','Jhon')

// localStorage.removeItem('name')
// console.log(localStorage.getItem('name'))

// sessionStorage.setItem('name','alex')
// sessionStorage.setItem('age',45)

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem('age'))

// COOKIES 

// document.cookie="name=54;expires=Wed,25 Feb 2026 23:59:59 GMT"
// document.cookie="age=45;expires=Wed,25 Feb 2026 23:59:59 GMT"

// console.log(document.cookie)

// function* generate(){
//     //yeild 1
//     //yeild 2
//     //yeild 3
//     let index=25017343
//     while(true){
//         yield index
//         index++
//     }
// }
// const gen=generate()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
const first=add(1)
console.log(first)
const second=first(2)
console.log(second)
console.log(second(3))