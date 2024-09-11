function validate() {
    var a = document.getElementById('Name').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('password').value;
    // var d = document.getElementById('dob').value;
    // var f = document.getElementById('address').value;
    var d = document.getElementById('phoneno').value;

    if (a == "") {
        document.getElementById('namespan').innerHTML = "Name is mandatory";
    }
    if (b == "") {
        document.getElementById('mailspan').innerHTML = "Email is mandatory";
    }
    if (c == "") {
        document.getElementById('passwspan').innerHTML = "Password is mandatory";
    }
    if (d == "") {
        document.getElementById('phonespan').innerHTML = "Mobile number is mandatory";
    }
    if (a == "" || b == "" || c == "" || d == "") {
        alert("All fields are mandatory");
        return false;
    }
    else if (a.length < 4 || b.length < 4 || c.length < 6 || f.length < 4) {
        alert("To short");
        return false;
    }
    else if (isNaN(f)) {
        alert("Should be number");
        return false;
    }
    else {
        true;
    }
}

function validate_login() {

    var b = document.getElementById('logemail').value;
    var c = document.getElementById('logpassword').value;

    if (b == "") {
        document.getElementById('logmailspan').innerHTML = "email is mandatory";
    }
    if (c == "") {
        document.getElementById('logpasswspan').innerHTML = "password is mandatory";
    }
    if (b == "" || c == "") {
        alert("All fields are mandatory");
        return false;
    }
    else if (b.length < 4 || c.length < 6) {
        alert("Password is too short!!!");
        return false;
    }
    else {
        true;
    }
}


document.getElementById("login").onclick = function () {
    location.href = "login.html";
};
