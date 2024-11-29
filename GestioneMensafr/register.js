function register(event)
{
    event.preventDefault();
    console.log("AONO QUi");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var nome = document.getElementById("nome").value;
    var matricola = document.getElementById("matricola").value;
    var cognome = document.getElementById("cognome").value;

    if (!validate(matricola,password,nome,cognome,username)) {
        console.log("NON FUNZIONA");
        alert("Dati non validi");
        return;
    }else {
        fetch("http://localhost:8080/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                nome: nome,
                matricola: matricola,
                cognome: cognome
            })
        })
        .then(response => response.json())
        .then(data => {
            //console.log("AONO QUi");
            console.log(data);
            alert(data.message);
        })
        .catch(error => {
            console.error(error);
        });
    }
}

function validate(matricola,password,nome,cognome,username) {

const regexmatricola = /^\d{10}$/;
const regexpassword = /^(?=.*\d).{8,}$/;
const regex = /.+/;
t = regex.test(nome) && regex.test(cognome) && regex.test(username); // regex controllo almeno un carattere per ogni campo

console.log(regexmatricola.test(matricola) && regexpassword.test(password) && t); // stampa in input

return regexmatricola.test(matricola) && regexpassword.test(password) && t; // return della regex della matricola e della password and t

}