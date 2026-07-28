const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");
const slider = document.getElementById("slider");

const simbol = "@()[]{}*,;/-_¿?.¡!$<>#&+%";
const number = "1234567890";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";

generateBtn.addEventListener("click", () => {
    const hasSimbol = document.getElementById("simbol").checked;
    const hasNumber = document.getElementById("num").checked;
    const hasMayus = document.getElementById("mayus").checked;
    const hasMinus = document.getElementById("minus").checked;
    const length = parseInt(slider.value);

    let allowedChars = "";
    let mandatoryChars = [];

    // 1. Guardamos al menos un carácter de cada tipo seleccionado
    if (hasSimbol) {
        allowedChars += simbol;
        mandatoryChars.push(simbol[Math.floor(Math.random() * simbol.length)]);
    }
    if (hasNumber) {
        allowedChars += number;
        mandatoryChars.push(number[Math.floor(Math.random() * number.length)]);
    }
    if (hasMayus) {
        allowedChars += mayus;
        mandatoryChars.push(mayus[Math.floor(Math.random() * mayus.length)]);
    }
    if (hasMinus) {
        allowedChars += minus;
        mandatoryChars.push(minus[Math.floor(Math.random() * minus.length)]);
    }

    if (allowedChars === "") {
        alert("Por favor, selecciona al menos un tipo de carácter.");
        return;
    }

    // Si la longitud pedida es menor que los tipos obligatorios seleccionados
    if (length < mandatoryChars.length) {
        alert(`Debes seleccionar una longitud de al menos ${mandatoryChars.length} para incluir todos los tipos seleccionados.`);
        return;
    }

    // 2. Rellenamos el resto de la contraseña si la longitud es mayor
    let passwordArray = [...mandatoryChars];
    for (let i = mandatoryChars.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        passwordArray.push(allowedChars[randomIndex]);
    }

    // 3. Mezclamos los caracteres para que el orden sea aleatorio (Algoritmo Fisher-Yates)
    for (let i = passwordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }

    const password = passwordArray.join("");

    const outputText = document.querySelector("main output p");
    if (outputText) {
        outputText.innerText = password;
    }
});

clipboardBtn.addEventListener("click", () => {
    const outputText = document.querySelector("main output p").innerText;

    if (!outputText || outputText === "Click en el botón generar contraseña") {
        alert("Primero debes generar una contraseña.");
        return;
    }

    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert("¡Contraseña copiada al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar: ", err);
        });
});
