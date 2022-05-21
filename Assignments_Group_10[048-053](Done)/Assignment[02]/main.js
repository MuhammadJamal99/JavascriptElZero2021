let start = 10;
let end = 0;
let stop = 3;
for(let i = start; i > end; i--) {
    if(i == 3){
        console.log(`0${i}`);
        break;
    } 
    else i.toString(10).length === 1? console.log(`0${i}`) : console.log(`${i}`);
};
/* Output
10
09
08
07
06
05
04
03*/