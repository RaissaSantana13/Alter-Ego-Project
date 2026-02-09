function typeWrite(elemento) {
    const textoOriginal = elemento.innerHTML;
    elemento.innerHTML = ''; 
    
    const textoArray = textoOriginal.split('');
    
    textoArray.forEach((letra, i) => {
        const delay = 70 * i + Math.random() * 40;
        
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, delay);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('#msg');
    if (titulo) {
        typeWrite(titulo);
    }
});