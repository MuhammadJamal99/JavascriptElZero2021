/**
    Array Challenge
 */
let zero = 0;
let counter = 3;
let My = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
My.pop();
My.pop();
My.reverse();
console.log(My); //["Osama","Elham","Mazero","Ahmed"]
console.log(My.slice(My.indexOf("Elham"),counter));//["Elham","Mazero"]
My = My.slice(My.indexOf("Elham"),counter);
console.log(`${My[My.indexOf("Elham")].split("h")[zero]}${My[My.indexOf("Mazero")].slice(My[My.indexOf("Mazero")].indexOf("z"))}`);//Elzero;
console.log(`${My[My.indexOf("Mazero")].slice(My[My.indexOf("Mazero")].indexOf("r"))}`);//ro;