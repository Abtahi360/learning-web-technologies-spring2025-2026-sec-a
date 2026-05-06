function searchEmployers(){
    let key = document.getElementById('search_key').value;
    let xhttp = new XMLHttpRequest();
    xhttp.open('post', '../controller/action.php?action=search_employer', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send('key=' + encodeURIComponent(key));





}