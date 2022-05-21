let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName[userName.toLowerCase().indexOf("e")].toLowerCase()); // e
console.log(userName[userName.toLowerCase().lastIndexOf("e")].toLowerCase().repeat(3)); // eee