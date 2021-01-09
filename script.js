//add rows and
const submit = document.getElementById('submit')
submit.onclick = function(){
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    const nostuff = document.getElementById('container1')
    if (rows == "" || rows == null || columns == "" || columns == null){
        let txt = document.createElement('a')
        txt.innerHTML = "ENTER ROWS/COLUMNS"
        nostuff.append(txt)
    }
    let output ='<table>'      
        function createTable(rows,columns){
            for(var i=1;i<=rows;i++){
                output=output+'<tr>'
                for(var j=1;j<=columns;j++){
                    output=output+'<td>'+'<input placeholder=" ">'+'</td>'
                }
                output=output+'</tr>'
            }
            output=output+'</table>'
            document.getElementById('container2').innerHTML=output    
       }
       createTable(rows,columns)
    }

