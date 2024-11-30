function newoperation()
{
    var importo = document.getElementById("importo").value;
    var data = document.getElementById("data").value;
    var matricola = JSON.parse(sessionStorage.getItem('user')).matricola;

    var user = JSON.parse(sessionStorage.getItem('user'));
    importo = optionselect(importo);

    //console.log( importo );
    if(!validateimporto(importo,user.credito))
    {
        alert("Importo non valido");
        return;
    }else 
    {
        fetch("http://localhost:8080/op/newoperation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: data,
                importo : importo,
                matricola : matricola
            })
        })
        .then(response => response.json())
        .then(data => {

            console.log(data);

            //aggiorno credito
            //console.log(typeof user.credito);
            user.credito = Number(user.credito) + Number(importo);
            sessionStorage.setItem('user', JSON.stringify(user));

            alert("accredito avvenuto con successo");
            window.location.href = "index.html";
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function checksession()
{
    if(sessionStorage.getItem('user') == null) window.location.href = 'login.html';
}

window.addEventListener("load", (event) => {
    event.preventDefault();

    checksession();
    var user = JSON.parse(sessionStorage.getItem('user'));
    singlecard(user);

});

function optionselect(importo)
{
    var option = document.getElementById("chose").value;
    console.log(option);
    if(option === "1") return importo * (-1);
    else return importo;
}

function singlecard(data)
{
    const container = document.getElementById('card');
    container.innerHTML = ''; // Svuota il contenitore delle card
    container.classList.add('card');

    // Crea il contenuto della card
    const title = document.createElement('h3');
    title.innerText = `Saldo Attuale`;

    const credito = document.createElement('p');
    credito.innerText = `${data.credito}€`;
    // Aggiunge titolo e descrizione alla card
    container.appendChild(title);
    container.appendChild(credito);

}

function validateimporto(importo, credito)
{
    const regex = /^\d+$/;
    if(credito + importo < 0) return 0;
    return regex.test(importo);
}
