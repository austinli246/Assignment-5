//add rows and
const submit = document.getElementById('submit')
submit.onclick = function(){
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const nostuff = document.getElementById('container1')
    if (rows == "" || rows == null || columns == "" || columns == null){
        let txt = document.createElement('a')
        txt.innerHTML = "ENTER ROWS/COLUMNS"
        nostuff.append(txt)
    }
    let output ='<table id ="table">'      
        function createTable(rows,columns){
            for(var i=1;i<=rows;i++){
                output=output+'<tr>'
                for(var j=1;j<=columns;j++){
                    output=output+'<td>'+'<input placeholder=" ">'+'</td>'
                }
                output=output+'</tr>'
            }
            output=output+'</table>'
            document.getElementById('container1').innerHTML=output    
       }
    createTable(rows,columns)
    
 
}



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
    console.log(deletesection)
 
    let tables = document.getElementById('table'), rows = table.rows;

    if (numcolumnsdel!=0){
        for (let i=0; i<rows[0].cells.length; i++){
            for (let j =0; j <rows.length; j++){
                rows[j].deleteCell(i)
            }
        }
    }
  
}






