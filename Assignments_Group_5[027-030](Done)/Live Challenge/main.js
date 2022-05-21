/*
- string challenge
- All Solution Must Be in One Chain
- you can use concatenate
 */
let a = "Elzero Web School";
// include this methods in your solution [slice , charAt] 
console.log(`${a.charAt(2).toUpperCase()}${a.slice(3,6)}`) //Zero a.slice(a.indexOf(a.charAt(2)) , a.indexOf(a.charAt(6)))

//8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); //HHHHHHHHH

console.log(a.slice(0, 6).split())//[Elzero]

//use only substr + `` in your solution 
console.log(`${a.substr(0, 6)} ${a.substr(10)}` ) // Elzero School

console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, a.length - 1).toUpperCase()}${a.charAt(a.length-1).toLowerCase()}`)