function handleSubmit(){
    event.preventDefault();
    document.querySelector('input').disabled = true;
    let n = event.target.n.value;
    let operaciones = ['i', 'i+1', 'i+2', 'i+3'];
    for(let i = 0; i <= n; i++){
        let fila = document.createElement('tr');
        document.body.append(fila);
        for(let j = 0; j < 4; j++){
            let attr = document.createElement('td');
            attr.textContent = `${operaciones[j]}`;
            fila.append(attr);
            console.log("a");
        }
    }
}

function locationReload(){
    location.reload();
}