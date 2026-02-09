function typeWrite(elemento) {
    const textoOriginal = elemento.innerHTML;
    elemento.innerHTML = ''; // Limpa antes de começar
    
    const textoArray = textoOriginal.split('');
    
    textoArray.forEach((letra, i) => {
        // Variação de tempo para parecer mais humano
        const delay = 70 * i + Math.random() * 40;
        
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, delay);
    });
}

// Inicia apenas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('#msg');
    if (titulo) {
        typeWrite(titulo);
    }
});