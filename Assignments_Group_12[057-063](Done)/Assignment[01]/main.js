let sayHello = function(theName, theGender) 
{
    if(theGender ==="Male") console.log(`"Hello Mr ${theName}"`);
    if(theGender === "Female") console.log(`"Hello Miss ${theName}"`);
    if(theGender === undefined) console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"