function newoperation()
{
    var importo = document.getElementById("importo").value;
    var data = document.getElementById("data").value;
    var matricola = JSON.parse(sessionStorage.getItem('user')).matricola;
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
        alert("fatto avvenuto con successo");
    })
    .catch(error => {
        console.log(error);
    });
}