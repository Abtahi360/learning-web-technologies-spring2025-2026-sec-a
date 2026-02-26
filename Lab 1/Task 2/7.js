function validation() {
    let userId = document.getElementById("userId").value.trim();
    let profilePicture = document.getElementById("profilePicture").value;
    let msg = document.getElementById("msg");

    if (userId === "") {
        msg.innerHTML = "Please enter a user ID..!";
        msg.style.color = "red";
        return false;
    }
    else if (isNaN(userId) || parseInt(userId) <=0) {
        msg.innerHTML = "User ID must be a positive number..!";
        msg.style.color = "red";
        return false;
    }
    else if (profilePicture === "") {
        msg.innerHTML = "Please select a profile picture..!";
        msg.style.color = "red";
        return false;
    }
    else {
        msg.innerHTML = "Form submitted successfully..!";
        msg.style.color = "green";
        return true;
    }
}