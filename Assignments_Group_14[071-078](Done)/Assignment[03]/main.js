let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce((pre,cur) => Array.isArray(cur)? `${pre}${cur.join("")}`: `${pre}${cur}`);
console.log(newArray)
// Elzero