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
//--------------- timeout--------------
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

const d=new Promise((res,rej)=>{
    let done=false
    setTimeout(()=>{
        if(done){
            res("work is done!!")
        }else{
            rej("work is not done")
        }
    },5000)
})
package.then((msg)=>{
    console.log(msg)

}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("finally block")
})
console.log(d)

function goToPlayground(){
    const p=new Promise((res,rej)=>{
        setTimeout(()=>{
            let done=true
            if (done){
                console.log("went to playground")
                res("Playground Time")
            }else{
                rej("Not allowed")
            }
        },2000)
    })
    return p
}