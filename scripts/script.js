function copyToClipboard(){
    // Seleccionar el elemento que contiene el texto que deseas copiar
    var elemento = document.createElement("textarea");
    elemento.value = "piampianimartin@gmail.com";

    // Añadir el elemento al DOM
    document.body.appendChild(elemento);

    // Seleccionar y copiar el texto al portapapeles
    elemento.select();
    document.execCommand("copy");

    // Eliminar el elemento del DOM, ya que ya no lo necesitamos
    document.body.removeChild(elemento);
}