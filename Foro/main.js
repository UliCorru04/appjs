function handleSubmit(){
    event.preventDefault();

    let contenedor = document.createElement('div');
    contenedor.classList.add("mensaje");
    document.body.append(contenedor);

    let perfilgui = document.createElement('div');
    perfilgui.classList.add("logo");
    contenedor.append(perfilgui);

    let perfil = document.createElement('img');
    perfil.classList.add("foto", "src");
    perfil.setAttribute("src", "profile.png");
    perfilgui.append(perfil);

    let textogui = document.createElement('div');
    textogui.classList.add("name-msj");
    contenedor.append(textogui);

    let autor = document.createElement('p');
    autor.classList.add("remitente");
    autor.textContent = event.target.nm.value;
    textogui.append(autor);

    let mensj = document.createElement('p');
    mensj.classList.add("msj");
    mensj.textContent = event.target.msg.value;
    textogui.append(mensj);

    event.target.msg.value = '';

}