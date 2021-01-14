
//add rows and
const submit = document.getElementById('submit')
submit.onclick = function(){
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const nostuff = document.getElementById('container1')
    const main = document.getElementById('grid')
   
    if (rows == "" || rows == null || columns == "" || columns == null){
        let txt = document.createElement('a')
        txt.innerHTML = "ENTER ROWS/COLUMNS"
        nostuff.append(txt)
    }
    let output ='<table id ="table" border = "1">'      
        function createTable(rows,columns){
            for(var i=1;i<=rows;i++){
                var newrow = document.createElement('tr');
         
               // output=output+'<tr>'
                for(var j=1;j<=columns;j++){
                    let newCell = document.createElement('td');
                   // output=output+'<td>'+'<input placeholder="0" value = "0">'+'</td>'
                   newrow.appendChild(newCell);
                   addGridFunction(newCell);
                }
               
                //output=output+'</tr>'
                main.appendChild(newrow)
            }
            //output=output+'</table>'
            //document.getElementById('container1').innerHTML=output    
           
       }
    createTable(rows,columns)
  
}

// for (let i =0; i<rows*columns; i++){
//     const newCell = document.getElementsByTagName('td')
//     addGridFunction(newCell)
//     }



const Delete = document.getElementById('delete')


Delete.addEventListener('click', deleteTable)
function deleteTable(){
    const numrowsdel = document.getElementById('Row').value
    const numcolumnsdel = document.getElementById('Column').value
    const deletesection = document.querySelector('tbody')
   
 
    for (let i =0; i<numrowsdel; i++){
            const delrow = document.querySelector('tr')
            delrow.remove()
    }
 
    let tables = document.getElementById('grid')
    rows = tables.rows;

    let totalColumns = rows[0].cells.length; //TOTAL NUMBER OF COLUMNS
    if (numcolumnsdel > totalColumns) {
        //this condition checks if the users is atempting to delete more columns than what exists
        return alert(`You only have ${totalColumns} rows`)
    }
    if (numcolumnsdel != 0) {
        for (let i = 0; i < rows.length; i++) {
            let currRow = rows[i];
            for (let j = 0; j < numcolumnsdel; j++) {
                let cells = currRow.cells;
                let currCell = cells[j]
                currRow.deleteCell(currCell)
            }
        }
    }


}


let overcolor = false; 

//adding functionality 
function addGridFunction(cell){
    //change color when clicked
    cell.addEventListener("click", setBackgroundColor)

    //give unclicked/black cells no color as a class 
    cell.classList.add("nocolor")

    //add hold mousedown function

    
    cell.addEventListener("mousedown", hover => {overcolor = true} )

    cell.addEventListener("mouseover", hover => {
        if (overcolor){
            cell.style.backgroundColor =currColor; 
            cell.classList.remove("nocolor")
        }
    })

    cell.addEventListener("mouseup", hover => {
        if (overcolor){
            overcolor = false;
        }


    })


}
let currColor = document.getElementById('colorOption').value
function setCurrColor(color) {
    currColor = color; 
    console.log(currColor)

}

function setBackgroundColor(){
    this.style.backgroundColor = currColor;
    this.classList.remove("nocolor")

}



// fill uncolored cells


function fillNotColored (){
    let uncolored = document.getElementsByClassName("nocolor")
    let arrayuncolor = Array.from(uncolored)
    // console.log(uncolored)
     arrayuncolor.forEach(cell => {
      cell.style.backgroundColor =currColor;
      cell.classList.remove("nocolor")
    
    })
}

function fillAll(){
    let allcells = document.getElementsByTagName('td')
    let arrayall = Array.from(allcells)

    arrayall.forEach(x => {
        x.style.backgroundColor =currColor; 
        x.classList.remove("nocolor")
    })
}

function restoreAll(){
    let allcells = document.getElementsByTagName('td')
    let arrayall = Array.from(allcells)

    arrayall.forEach(x => {
        x.style.backgroundColor = "white"; 
        x.classList.add("nocolor")
    })
    
}