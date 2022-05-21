let checkStatus = function(a, b, c) {
    if(typeof a === "string")
    {
        if(typeof b === "boolean") console.log(`"Hello ${a}, Your Age Is ${c}, You Are ${b===true?"Available":"Not Available" } For Hire"`);
        if(typeof c === "boolean") console.log(`"Hello ${a}, Your Age Is ${b}, You Are ${c===true?"Available":"Not Available" } For Hire"`);
    }
    else if(typeof b === "string")
    {
        if(typeof a === "boolean") console.log(`"Hello ${b}, Your Age Is ${c}, You Are ${a===true?"Available":"Not Available" } For Hire"`);
        if(typeof c === "boolean") console.log(`"Hello ${b}, Your Age Is ${a}, You Are ${c===true?"Available":"Not Available" } For Hire"`);
    }
    else 
    {
        if(typeof a === "boolean") console.log(`"Hello ${c}, Your Age Is ${b}, You Are ${a===true?"Available":"Not Available" } For Hire"`);
        if(typeof b === "boolean") console.log(`"Hello ${c}, Your Age Is ${a}, You Are ${b===true?"Available":"Not Available" } For Hire"`);
    }
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"