let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"
let Solution = myString.split(",").filter((ele) => isNaN(ele)).map((ele) => ele === "_"? " ": ele[0]).reduce((pre,cur)=>`${pre}${cur}`).slice(false,-true);
console.log(Solution);