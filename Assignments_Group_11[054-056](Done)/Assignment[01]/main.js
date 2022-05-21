let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

MainLoop: for(index; index < friends.length; index++)
{
    if(typeof friends[index] === 'string')
    {
        if(friends[index].startsWith(friends[counter][counter],counter))
            continue;
        else
            console.log(`"${index} => ${friends[index]}"`);
    }
    else
        continue;
}
// Output
"1 => Sayed"
"2 => Mahmoud"