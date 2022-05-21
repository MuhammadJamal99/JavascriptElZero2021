let a = 1_00,
    b = 2_00.5,
    c = 1e2,
    d = 2.4;  
    //find Smallest number in all variables and return integer
    console.log(parseInt(Math.min(a, b, c, d)));

    //use Variables a , d To get this Value
    console.log(Math.pow(a,Math.trunc(d))); //10000

    //get integer 2 from variable d by 4 methods
    console.log(Math.round(d));
    console.log(Math.floor(d));
    console.log(Math.trunc(d));
    console.log(Number.parseInt(d));


    //use Variables b , d To get this Values
    console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); //66.67 string
    console.log(Math.round(Math.trunc(b) / Math.ceil(d))); //67 number