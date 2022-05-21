let createSelectBox = function(startYear, endYear) 
{
    let SelectBox = `<select>`;
    for(let i = startYear; i <= endYear; i++){
        SelectBox += `<option value="${i}">${i}</option>`;
    }
    SelectBox += `</select>`;
    document.write(SelectBox);
}
createSelectBox(2000, 2021);