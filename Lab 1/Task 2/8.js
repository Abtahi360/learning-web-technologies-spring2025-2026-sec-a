function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementsByName("gender").value;
    let dob = document.getElementByName("Date of Birth").value;
    let bloodGroup = document.getElementByName("Blood Group").value;
    let degree = document.getElementsByName("degree").value;
    let photo = document.getElementById("photo").value;
    let msg = document.getElementById("msg");

    if(name === "" || email === "" || gender === "" || dob === "" || bloodGroup === "" || degree === "" || photo === ""){
        msg.textContent = "Please fill all the fields..!";
        msg.style.color = "red";
        return false;
    }
    
}