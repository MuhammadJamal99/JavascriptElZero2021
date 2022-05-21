// let names = function(...names){
//     return `String [${names.join("], [")}] => Done!`; 
// }
// let clac = function(one, two, ...nums)
// {
//     return nums.reduce((a,b) => a + b,0) - (one + two);
// };
let names = (...names) => `String [${names.join("], [")}] => Done!`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

let MyNumbers = [20, 50, 10, 60];
let clac = (one, two, ...nums) => nums.reduce((a, b) => a + b, 0) - (one + two);
console.log(clac(10,20, 50, 60));
