// var ary=[1,2,3,5,6,7]

// var b= ary.map(test)
// console.log(b)
//     function test(x){
//         return x*10
//     }


var ary =[
    {fname:"abhi",lname:"pawar"},
    {fname:"hari",lname:"sirvi"},
    {fname:"manoj",lname:"rajput"}
]
var b=ary.map(test)
console.log(b)
function test(x){
    return x.fname+""+x.lname;
}