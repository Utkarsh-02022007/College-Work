const users = [
    {userId: 1, firstName:'harshit', gender: 'male'},
    {userId:2, firstName: 'mohit', gender: 'male'},
    {LuserId:3, firstName:'nitish', gender: "male"},
]
let  [{firstName}, ,user3]=users; // output will taken userid=2 for user 3 and for var firstname it will take from userid =1
// let  [{firstName},user3]=users; // output will taken userid=3 for user 3 and for var firstname it will take from userid =1
console.log(user3,firstName)