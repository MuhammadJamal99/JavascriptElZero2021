let start = 0;
let swappedName = "elZerO";
let CharArray = Object.assign([], swappedName);
/*
const string = 'word';
// Option 1
swappedName.split('');

// Option 2
[...swappedName];

// Option 3
Array.from(swappedName);

// Option 4
Object.assign([], swappedName);
*/
MainLoop: for(start; start < CharArray.length; start++){
    if(CharArray[start] === CharArray[start].toLowerCase())
        CharArray[start] = CharArray[start].toUpperCase();
    else
        CharArray[start] = CharArray[start].toLowerCase();
    if(start == CharArray.length - 1)
        swappedName = CharArray.join("");
}
console.log(swappedName);
// Output
//"ELzERo"