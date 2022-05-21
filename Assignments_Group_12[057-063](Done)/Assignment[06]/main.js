let multiply = function(...Parameters)
{
    let result = 1;
    for(let i = 0; i < Parameters.length; i++){
        if(typeof Parameters[i] === "string") continue;
        else {
            if(Parameters[i] % 1 !== 0) result *= parseInt(Parameters[i]);
            else result *= Parameters[i];
        }
    }
    console.log(result);
};
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000