let MyAdmins = ["Ahmed", "Osama", "Sayed", "Stop","Samera"],
    Myemployees=["Amgad", "Samah", "Ameer", "Omer", "Othman", "Amany", "Samia"],
    AdminsCount = 0;
for(let i = 0; i < MyAdmins.length; i++)
{
    if(MyAdmins[i] === "Stop") break;
    else AdminsCount++;
}
document.write(`<div>We Have ${AdminsCount} Admins</div>`);
document.write(`<hr/>`);
MainLoop: for(let i = 0; i < AdminsCount; i++) {
        document.write(`<div>`);
        document.write(`The Admin For Team ${i + 1} Is ${MyAdmins[i]}`)
        document.write(`<h3>Team Members:</h3>`)
        let TeamCounter = 1;
        NestedLoop: for(let j = 0; j < Myemployees.length;j++){
            if(Myemployees[j].startsWith(MyAdmins[i][0], 0)){
                document.write(`<p>- ${TeamCounter} ${Myemployees[j]}</p>`);
                TeamCounter++;
            }
            else continue;
        }
        document.write(`</div>`);
        document.write(`<hr/>`);
}