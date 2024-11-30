window.addEventListener("load", (event) => {
    event.preventDefault();

    checksession();
    
    var matricola = JSON.parse(sessionStorage.getItem('user')).matricola;
    var user = JSON.parse(sessionStorage.getItem('user'));

    //controlli
    console.log(user);
    console.log(matricola);


    fetch("http://localhost:8080/op/operation?matricola=" + matricola, {
        method: "Get",
        headers: {
            "Content-Type": "application/json"
        },
        
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);
        
        singlecard(user);
        generaCard(data);
    })
    .catch(error => {
        console.log(error);
    });
});

function checksession()
{
    if(sessionStorage.getItem('user') == null) window.location.href = 'login.html';
}
function singlecard(data)
{
    const container = document.getElementById('single-card-container');
    container.innerHTML = ''; // Svuota il contenitore delle card

    const card = document.createElement('div'); // Crea un div per la card
    card.classList.add('single-card'); 
    
    // Crea il contenuto della card
    const title = document.createElement('h3');
    title.innerText = `Saldo Attuale`;

    const credito = document.createElement('p');
    credito.innerText = `${data.credito}€`;
    // Aggiunge titolo e descrizione alla card
    card.appendChild(title);
    card.appendChild(credito);
    
    container.appendChild(card);

}

//funzione che genera il giorno della settimana
function getDayOfWeek(dateString) {
    // Dividi la stringa "dd/mm/aa" in parti
    const [day, month, year] = dateString.split('/').map(Number);

    // Costruisci un oggetto Date usando il formato completo per l'anno (20xx)
    const fullYear = year < 100 ? 2000 + year : year; // Supporta anche 'aa' come '2023'
    const date = new Date(fullYear, month - 1, day); // I mesi in JS sono indicizzati da 0

    // Ottieni il giorno della settimana (0 = Domenica, 1 = Lunedì, ecc.)
    const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    return daysOfWeek[date.getDay()];
}




function changeColor(credito) 
{

    if(credito > 0) return 1;
    else return 0;
}


function generaCard(data) 
{
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Svuota il contenitore delle car
    // Crea 'numero' card
    for (let i = data.length - 1 ; i >= 0 ; i--) {
        const card = document.createElement('div'); // Crea un div per la card
        card.classList.add('card'); // Aggiunge la classe "card
        // Crea il contenuto della card

        const title = document.createElement('h3');
        title.innerText = ` ${getDayOfWeek(data[i].data)}   ${data[i].data}`;

        const importo = document.createElement('p');
        importo.innerText = ` ${data[i].importo}€`;

        if(changeColor(data[i].importo) ) importo.style.color = "green";
        // Aggiunge titolo e descrizione alla card
        card.appendChild(title);
        card.appendChild(importo)
        // Aggiunge la card al contenitore
        container.appendChild(card);
    }
}

function logout()
{
    sessionStorage.removeItem('user');
    window.location.href = 'login.html';
}