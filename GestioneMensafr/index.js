window.addEventListener("load", (event) => {
    event.preventDefault();
    var matricola = JSON.parse(sessionStorage.getItem('user')).matricola;
    var user = JSON.parse(sessionStorage.getItem('user'));
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

function singlecard(data)
{
    const container = document.getElementById('single-card');
    container.innerHTML = ''; // Svuota il contenitore delle card

    // Crea il contenuto della card
    const title = document.createElement('h3');
    title.innerText = `Credito Attuale`;
    const credito = document.createElement('h3');
    credito.innerText = ` ${data.credito  }`;
    // Aggiunge titolo e descrizione alla card
    container.appendChild(title);
    container.appendChild(credito);
    

}


function generaCard(data) 
{
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Svuota il contenitore delle car
    // Crea 'numero' card
    for (let i = 0; i <= data.length; i++) {
        const card = document.createElement('div'); // Crea un div per la card
        card.classList.add('card'); // Aggiunge la classe "card
        // Crea il contenuto della card
        const title = document.createElement('h3');
        title.innerText = ` ${data[i].data}`;
        const description = document.createElement('p');
        description.innerText = ` ${data[i].importo}`;
        // Aggiunge titolo e descrizione alla card
        card.appendChild(title);
        card.appendChild(description)
        // Aggiunge la card al contenitore
        container.appendChild(card);
    }
}