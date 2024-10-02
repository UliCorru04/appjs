function handleSubmit(){
    event.preventDefault();
    let n = +event.target.n.value;
    if (n > 0){
        let p = document.createElement('p');
    p.textContent = `El valor absoluto de ${n} es ${n*1}`;
    document.body.append(p);
    } if (n < 0){
        let p = document.createElement('p');
        p.textContent = `El valor absoluto de ${n} es ${n*-1}`;
        document.body.append(p);
    } if (n == 0){
        let p = document.createElement('p');
        p.textContent = `El valor absoluto de ${n} es ${n} (¡DUH!)`;
        document.body.append(p);
    }
    event.target.n.value = "";
}