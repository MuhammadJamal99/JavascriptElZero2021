let ageInTime = function(theAge) 
{
    if(theAge >= 10 && theAge < 100){
        console.log(`Your Age In Months Is: ${theAge * 12} Month`);
        console.log(`Your Age In Weeks Is: ${theAge * 12 * 4} Week`);
        console.log(`Your Age In Days Is: ${theAge * 12 * 4 * 7} Day`);
        console.log(`Your Age In Hours Is: ${theAge * 12 * 4 * 7 * 24 * 60} Hour`);
        console.log(`Your Age In Minutes Is: ${theAge * 12 * 4 * 7 * 24 * 60 * 60} Minute`);
        console.log(`Your Age In Seconds Is: ${theAge * 12 * 4 * 7 * 24 * 60 * 60 * 60} Second`);
    }
    else console.log(`Age Out Of Range`);
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months