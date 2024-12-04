function changePassword()
{
    var lastpassword = document.getElementById("lastpassword").value;
    var newpassword = document.getElementById("newpassword").value;
    var newpassword1 = document.getElementById("newpassword1").value;
    var user = JSON.parse(sessionStorage.getItem('user'));

    if(lastpassword != user.password)
    {
        alert("Password not valid");
        return;
    }
    if(!check(lastpassword,newpassword,newpassword1))
    {
        alert("Password not valid");
        return;
    }
    if(newpassword != newpassword1)
    {
        alert("Passwords do not match");
        return;
    }

    fetch("http://localhost:8080/user/changepass", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            matricola: user.matricola,
            nome : user.nome,
            cognome : user.cognome,
            username : user.username,
            password : lastpassword,
            credito : user.credito,
            newpassword : newpassword1})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Password changed");
        //window.location.href = "index.html";
    })
    .catch(error => {
        console.log(error);
        alert("Password not changed");
    });
}

function check(lastpassword,newpassword,newpassword1)
{
    const regexpassword = /^(?=.*\d).{8,}$/;
    return regexpassword.test(newpassword) && regexpassword.test(newpassword1) && regexpassword.test(lastpassword); 
}   