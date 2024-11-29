function login(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username,password);
    if (!check(username,password)) 
    {
        alert("Dati non validi");
        return;
    }else 
    {
        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            alert("Login avvenuto con successo");
            window.location.href = "index.html";
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function check(username,password)
{
    const regexpassword = /^(?=.*\d).{8,}$/;
    const regex = /.+/;
    console.log(regexpassword.test(password) && regex.test(username));

    return regexpassword.test(password) && regex.test(username);
}
