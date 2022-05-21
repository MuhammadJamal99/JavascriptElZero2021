let myString = "EElllzzzzzzzeroo";
let newString = myString.split("").filter((ele,index,arr) => arr.indexOf(ele) === index).join("");
console.log(newString);
// Elzero