
 
    //  function fname(){
    // for(let i=1;i<=10;i++){
    //     for(let j=1;j<=10;j++){
    //          let a=i*j;
    //          console.log(a)   
    //     }
    //   }
  
    // function fname(){
    //   console.log(arguments.length)
    //   let C=0;
    //   for(let i=0;i<arguments.length;i++){
    //    C += i;
    //      console.log(C)
    //   }
    
    // }

// ---------------------------------------------------------------
    //function with rest operator
    //when no of parameter is more we use it without passing parameter directly give argument
    //if smthing we dont want to see and other perform
    // function fname(name,...arguments){
    //   let sum=0;
    //   for(let i in arguments){
    //     sum=sum+arguments[i];
    //   }
   
    //   console.log(`Hello ${name}your mark is `+ sum)
    // }
    // fname("abhishek",10,20,30)
    // fname("harish",40,40,90)
// console.log(fname(2,20,40))
    
//  Template string concate
//  console.log(`Hello ${name}your mark is `+ sum)


//if too much argument  then we can make  array and add it as a spread operator

function fname(name,...arguments){
  let sum=0;
  for(let i in arguments){
    sum=sum+arguments[i];
  }

  console.log(`Hello ${name}your mark is `+ sum)
}
let arr=[10,20,30,40,50]
fname("abhishek",...arr)    
//  if we remove spread operator before it will tear the code  