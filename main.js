function muestra_oculta(id) {
    if (document.getElementById) { //se obtiene el id
        let div = document.getElementById(id); //se define la variable "el" igual a nuestro div
        if (div.style.display == 'none') { //damos un atributo display:none que oculta el div
            div.style.display = 'flex'; //damos un atributo display:block que muestra el div
        }
        else {
            div.style.display = 'none'; //damos un atributo display:none que oculta el div
        }
    }
}