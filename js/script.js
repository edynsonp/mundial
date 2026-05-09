// --- Configuración del Countdown ---
// Define la fecha y hora de inicio del mundial (cambia esto por la fecha real)
// Formato: Año, Mes (0-11), Día, Hora, Minuto, Segundo
const launchDate = new Date("2026-06-11T16:00:00"); // ¡Ejemplo! Ajusta esta fecha

// Obtener los elementos del DOM
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Función para actualizar el contador
function updateCountdown() {
    const currentDate = new Date();
    const difference = launchDate - currentDate;

    // Si la fecha ya pasó, muestra un mensaje y detiene el contador
    if (difference < 0) {
        daysEl.innerText = "0";
        hoursEl.innerText = "0";
        minutesEl.innerText = "0";
        secondsEl.innerText = "0";
        clearInterval(countdownInterval); // Detiene la ejecución de setInterval
        return; // Sale de la función
    }

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mostrar en la página (añadiendo un cero si es necesario para que sean dos dígitos)
    daysEl.innerText = days;
    hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Actualiza el contador inmediatamente al cargar la página
updateCountdown();

// Llama a la función updateCountdown cada segundo (1000 milisegundos)
const countdownInterval = setInterval(updateCountdown, 1000);