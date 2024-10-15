window.addEventListener('load', function(){

    // referenciar controles de pantalla
    const msgSuccess = this.document.getElementById('msgSuccess');

    // recuperar nombre de usuario
    const result = JSON.parse(this.localStorage.getItem('result'));

    // mostrar nombre de usuario en alerta
    mostrarAlerta(`Bienvenido ${result.nombreUsuario}`);

});

function mostrarAlerta(mensaje) {
    msgSuccess.innerHTML = mensaje;
    msgSuccess.style.display = 'block';
}





// src/main.js (o el archivo principal de tu proyecto Vite)
window.addEventListener('load', function() {
    const btnClose = document.getElementById('btnClose');

    btnClose.addEventListener('click', function() {
        cerrarSesion(); // Llama a la función cerrarSesion
    });
});

async function cerrarSesion() {
    const url = 'http://localhost:8081/login/logout-async'; 
    const tipoDocumento = localStorage.getItem('tipoDocumento'); 
    const numeroDocumento = localStorage.getItem('numeroDocumento');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tipoDocumento: tipoDocumento,
                numeroDocumento: numeroDocumento
            })
        });

        if (response.ok) {
            window.location.replace('index.html'); // Redirigir a index.html
        } else {
            console.log('Error: Ocurrió un problema con el cierre de sesión');
        }
    } catch (error) {
        console.log('Error: Ocurrió un problema', error);
    }
}
