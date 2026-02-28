// const band={
//     bandname:"DJO",
//     songname:"End Of Begging",
//     year:2012

// }
// let {bandname , songname}=band;
// console.log(bandname , songname)
// console.log(band.bandname) // ----------you can print keys like this but it is not efficient--------


// let{bandname:Str ,songname:Ter , ...respP}=band; //  -----------changing the name of variable---------

// console.log(Str,Ter,)

//objects in array array[{objects},{objects},{objects}]

const user=[
    {userId : 1   , name : "Utkarsh" , gender:"Male",},
    {userId:2 , name:"Awanik" , gender:"Male",},
    {userId:3 , name:"Rohan" , gender:"Male",},
]
for(let users of user){
    console.log(users)
 }

 