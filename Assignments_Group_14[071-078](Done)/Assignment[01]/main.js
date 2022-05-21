let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let newStr = mix.map((ele,index,arr) => !isNaN(parseInt(ele)) ?  "": ele).reduce((acc,cur) => `${acc}${cur}`);
console.log(newStr);