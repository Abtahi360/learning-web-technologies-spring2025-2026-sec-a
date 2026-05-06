function searchEmployers(){
    let key = document.getElementById('search_key').value;
    let xhttp = new XMLHttpRequest();
    xhttp.open('post', '../controller/action.php?action=search_employer', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send('key=' + encodeURIComponent(key));

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            let html = '';
            for(let i=0; i<data.length; i++){
                html += '<tr>'+
                    '<td>' + data[i].id + '</td>'+
                    '<td>' + data[i].employer_name + '</td>'+
                    '<td>' + data[i].company_name + '</td>'+
                    '<td>' + data[i].contact_no + '</td>'+
                    '<td>' + data[i].username + '</td>'+
                    '<td>' +
                    '<a href="edit.php?id=' + data[i].id + '">EDIT</a> | '+
                    '<a href="../controller/action.php?action=delete_employer&id=' + data[i].id + '" onclick="return confirm(\'Are you sure?\')">DELETE</a>'+
                    '</td>'+
                '</tr>';
            }
            document.getElementById('employer_rows').innerHTML = html;
        }
    }



}