document.addEventListener("DOMContentLoaded", () => {
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbz_XujNGhKeltKK_IDykzBijghubfR1g_QKWibduV-qTaarA2aLjmZ_Iq2YJEWFdPoRfQ/exec'; // Reemplaza esto con la URL de tu script de Google Apps

    fetch(scriptUrl)
        .then(response => response.text())
        .then(token => {
            const span = document.getElementById("token");
            span.textContent = token;

            var userToken = prompt("Insert your token");

            if(token === userToken) console.log("CORRECT")
            else window.close();
        })
        .catch(error => console.error('Error: ', error));
})