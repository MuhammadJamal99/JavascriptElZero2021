let Job ="Manger",
    Salary = 0;

    switch(Job) {
        case "Manger":
            Salary = 8000;
            console.log(Salary);
            break;
        case "IT":
        case "Support":
            Salary = 6000;
            console.log(Salary);
            break;
        case "Developer":
        case "Designer":
            Salary = 7000;
            console.log(Salary);
            break;
        default:
            Salary = 4000;
            console.log(Salary);
    }

    let holidays = 0,
        money = 0;
        
        if(holidays === 0) {
            money = 5000;
            console.log(`My Money Is ${money}`);
        } else if(history === 1 || holidays === 2){
            money = 3000;
            console.log(`My Money Is ${money}`);
        } else if(holidays === 3) {
            money = 2000;
            console.log(`My Money Is ${money}`);
        } else if(holidays === 4) {
            money = 1000;
            console.log(`My Money Is ${money}`);
        } else {
            money = 0;
            console.log(`My Money Is ${money}`);
        }