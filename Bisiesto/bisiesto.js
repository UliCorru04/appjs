function handleSubmit(){
    event.preventDefault();
    let year = +event.target.year.value;
    let isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    let p = document.createElement('p');
    p.textContent = `${year} ${isLeap ? ' ' : 'no '}es año bisiesto`;
    document.body.append(p);
    event.target.reset();
    
} // De la prueba de JS con Trini jajaj