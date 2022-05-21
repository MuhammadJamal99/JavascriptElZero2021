let theTitle ="Elzero",
    theDescription = "Elzero Web School",
    theDate = "25/10",
    myDiv = 
    `<div class="card">
        <h3>Hello${theTitle}</h3>
        <p>${theDescription}</p>
        <span>${theDate}</span>
    </div>`.repeat(4);
    document.body.style.cssText = "display:flex;flex-direction:column;justify-content:start;align-items:start;";
    document.body.innerHTML = myDiv;