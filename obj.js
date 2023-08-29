// var a = {
//     fname: "abhishek",
//     lname: "pawar",
//     favMovies: ['dhoom', 'sholay', 'Hum'],
// //salary and fullname are methods of a
//     salary: function () {
//         return 25000
//         },
//      fullname: function(){
//         return  this.fname +""+ this.lname;
//      }   ,
//      living:{
//         city:"indore",
//         state:"madhyapradesh"
//      }
// }
// console.log(a.living)


// Another way of making object

// var person= new Object();
// person.firstname="manoj",
// person.lastname="rajput",
// person.age=25;
// //person[age] 
// console.log(person)

//ARRAY of object
// var student=[
//     {Name:"ram",age:22},
//     {Name:"karan",age:23},
//     {Name:"rahul",age:45}
// ]
// console.log(student[2].Name)

// const variable with array and Object;

// via this way we can reassign value in const array
// const a=[10,20,30]
// a[0]=25




var obj1 ={
    name:"harry"
};

var obj2 ={
    age:"23"
};

console.log({...obj1,...obj2});

// ---------------------object literals------------