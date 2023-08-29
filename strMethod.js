var a ="I am here for my professional my growth"
var c="javascript"
var d="information technology world"
// var b=a.length
// var b=a.toLowerCase()
var b=a.toUpperCase()
var b=a.includes("my")  //case sensitive
var b=a.startsWith("am")
var b=a.search("here")  // return position if found otherwise -1
var b=a.match(/my/g) //find same thing and return in array
var b=a.indexOf("for")
var b=a.replace(/my/g,"only")
var b=a.trim()  // to cover space
var b=a.charAt(3)
var b=a.charCodeAt(3) //return ascii value
// var b=a.fromcharCode(110)
var b=a.concat(c,d)
var b=a.split("m")  //split everything with comma
var b=a.repeat(2)
var b=a.slice(5,9) //return from 5 to 9   -1 for value from last side
var b=a.substr(3,5)    //from 3 it will print 5 digit
var e=10;
var b=e.toString() //if we add e+20 return 1020
// console.log(b+20)


 var f="99.7"
var num=Number(f)
var num=parseInt(f)     //return value without decimal
var num=parseFloat(f) // return value with decimal

var num=Number.isInteger(f) // no is integer or not consider decimal as non integer
var num=f.toFixed()
console.log(num) 