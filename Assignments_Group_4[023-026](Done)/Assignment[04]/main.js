let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Math.round((Number.parseFloat(myVar) + Number.EPSILON) * 100) / 100); // 100.57
console.log(Number(Number.parseFloat(myVar).toFixed(2))); // 100.57