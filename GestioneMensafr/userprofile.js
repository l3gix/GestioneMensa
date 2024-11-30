window.addEventListener("load", (event) => {
    event.preventDefault();
    checksession();

    var user = JSON.parse(sessionStorage.getItem('user'));
    userprint(user);

});

function userprint(user)
{
    var nome =  document.getElementById("nome");
    var cognome =  document.getElementById("cognome");
    var username =  document.getElementById("username");
    var matricola =  document.getElementById("matricola");

    nome.innerHTML = user.nome;
    cognome.innerHTML = user.cognome;
    username.innerHTML = user.username;
    matricola.innerHTML = user.matricola;

}

function checksession()
{
    if(sessionStorage.getItem('user') == null) window.location.href = 'login.html';
}
