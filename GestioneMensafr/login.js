window.addEventListener("load", (event) => {
    event.preventDefault();
    checksessionok();
});

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
            window.location.href = "index.html";a
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function checksessionok()
{
    if(sessionStorage.getItem('user') != null) window.location.href ='index.html';
}

function check(username,password)
{
    const regexpassword = /^(?=.*\d).{8,}$/;
    const regex = /.+/;
    console.log(regexpassword.test(password) && regex.test(username));

    if(!regexpassword.test(password))
        {
            var descrizione = document.getElementById("descrizione");
            descrizione.innerHTML = "Password non valida, deve essere lunga almeno 8 caratteri e contenere almeno un numero";
        }

    return regexpassword.test(password) && regex.test(username);
}


