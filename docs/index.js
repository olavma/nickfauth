document.addEventListener("DOMContentLoaded", () => {
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbz_XujNGhKeltKK_IDykzBijghubfR1g_QKWibduV-qTaarA2aLjmZ_Iq2YJEWFdPoRfQ/exec'; // Reemplaza esto con la URL de tu script de Google Apps

    fetch(scriptUrl)
        .then(response => response.text())
        .then(token => {
            var userToken = prompt("Insert your token");

            if(token === userToken) window.location.href = './truePage/index.html'
            else wrongToken();
        })
        .catch(error => console.error('Error: ', error));
})

function wrongToken() {
    const paras = document.getElementsByClassName("hide");
    paras[0].classList.remove("hide");
    const span = document.getElementById("secs");
    var countdownValue = 10;
    span.textContent = countdownValue;

    var timer = setInterval(() => {
        countdownValue--;
        span.textContent = countdownValue;

        if (countdownValue <= 0) {
            document.getElementById("close-window").style.display = '';
            clearInterval(timer);
        }
    }, 1000);
}